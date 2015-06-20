<?php

class User_model extends CI_Model
{

	protected $tablename = 'TUSER';

	public function __construct()
	{
		parent::__construct();
	}

	public function AddUser($name=null, $city=null)
	{
		if (is_null($name) || is_null($city))
		{
			return false;
		}

		$data = array('name'=>$name, 'city'=>$city);
		$this->db->insert($this->tablename, $data);
		$insert_id = $this->db->insert_id();
		return $insert_id;
	}

	public function ListAll()
	{
		$users = $this->db->get($this->tablename)->result();
		return $users;
	}
	
}
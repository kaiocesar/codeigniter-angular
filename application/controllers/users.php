<?php 

class Users extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model("user_model");
	}

	public function index()
	{
		$data["include"] = "user/index";
		$this->load->view("users/home", $data);
	}

	public function add()
	{
		$postdata = file_get_contents("url_para_capturar_o_json");
		$request = json_decode($postdata);
		$name = $request->name;
		$city = $request->city;
		$id = $this->user_model->AddUser($name, $city);
		
	}
}
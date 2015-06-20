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
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata);
		$name = $request->name;
		$city = $request->city;
		$id = $this->user_model->AddUser($name, $city);
		$status = ($id) ? "success": "failure";
		
		print_r(json_encode(array('status'=>$status)));		
		
	}
}
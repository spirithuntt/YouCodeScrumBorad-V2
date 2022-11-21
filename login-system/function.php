<?php
//INCLUDE DATABASE FILE
include('../database.php');

//ROUTING
if (isset($_POST['signin']))
    signup();
if (isset($_POST['login']))
    login();

function signup()
{
  $connect=connection();
      if($_SERVER['REQUEST_METHOD'] == "POST")//check the request method in the server //if using just $post is bqd bcs you cqn send just an empty request 
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = password_hash($_POST['password'], PASSWORD_BCRYPT);//Use the CRYPT_BLOWFISH algorithm to create the hash. This will produce a standard crypt() compatible hash using the "$2y$" identifier. The result will always be a 60 character string, or false on failure.
 
		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//save to database
			$query = "INSERT INTO user (user_id, user_name, password) values (null, '$user_name', '$password')";

			mysqli_query($connect, $query);

			header("Location: login.php");
			die;//exit
		}else
		{
			echo "Please enter some valid information!";
		}
	}
}

function login()
{
  $connect=connection();
  if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) || !empty($password) || !is_numeric($user_name))
		{

			//read from database
			$query = "SELECT * FROM user WHERE user_name = '$user_name'";
			$result = mysqli_query($connect, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					$password_v = password_verify($password, $user_data['password']);
					if($password_v == $password)
					{
            $_SESSION['id'] = $user_data['user_id'];
            $_SESSION['username'] = $user_data['user_name'];
            $_SESSION['login'] = true;
						header("Location: ../index.php");
					}
				}
			}
		}else
		{
			echo "wrong username or password!";
		}
	}
}











?>
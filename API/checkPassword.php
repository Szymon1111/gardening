<?php
  require './database.php';
  $database = new Database();

  $password = $_GET['password'];
  if($password === $database->password){
    echo json_encode('CORRECT');
  }
  else{
    echo json_encode('INCORRECT');
  }
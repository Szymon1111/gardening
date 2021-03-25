<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    $tipContent = $_GET['tipContent'];

    $database->post('INSERT INTO tips(content) VALUES(?)', [$tipContent]);
  }
<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    $id = $_GET['id'];
    $isVisible = $_GET['isVisible'];

    $database->post('UPDATE gallery SET isVisible=? WHERE id=?', [$isVisible, $id]);
  }
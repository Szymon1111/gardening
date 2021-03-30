<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    $id = $_GET['id'];

    $database->post('DELETE FROM gallery WHERE id=?', [$id]);
  }
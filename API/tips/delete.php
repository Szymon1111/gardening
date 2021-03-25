<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    $tipID = $_GET['tipID'];

    $database->post('DELETE FROM tips WHERE id=?', [$tipID]);
  }
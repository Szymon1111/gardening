<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    echo json_encode($database->get('SELECT * FROM tips', []));
  }
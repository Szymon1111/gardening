<?php
  require '../database.php';
  $database = new Database();

  if($database->testConnection()){
    $tipID = $_GET['tipID'];
    $newContent = $_GET['newContent'];

    $database->post('UPDATE tips SET content=? WHERE id=?', [$newContent, $tipID]);
  }
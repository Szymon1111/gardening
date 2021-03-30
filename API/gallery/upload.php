<?php
  require '../database.php';
  $database = new Database();
  
  if($database->testConnection()){
    $addedFiles = [];
  
    foreach ($_FILES as $file) {
      move_uploaded_file($file["tmp_name"], "../../images/gallery/".$file["name"]);
      array_push($addedFiles, $file['name']);

      $database->post('INSERT INTO gallery(name) VALUES(?)', [$file['name']]);
    }
    echo json_encode($addedFiles);
  }
  
?>
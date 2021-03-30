<?php
  header("Access-Control-Allow-Origin: *");
  // header("Access-Control-Allow-Origin: http://topgames.webd.pro/SpaceJump/");

  class Database {
    private $HOST = 'localhost';
    private $USER = 'root';
    private $PASSWORD = '';
    private $NAME = 'gardening';

    // private $HOST = 'sql103.epizy.com';
    // private $USER = 'epiz_28242939';
    // private $PASSWORD = 'Y71to3plmKT1oN';
    // private $NAME = 'epiz_28242939_gardeningDB';

    public $connection;

    public function __construct() {
      $this->connection = new PDO('mysql:host='.$this->HOST.';dbname='.$this->NAME, $this->USER, $this->PASSWORD);
      $this->connection->exec("set names 'utf8'");
    }

    public function testConnection() {
      if ($this->connection->errorCode() > 0)return false;
      $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return true;
    }

    private function getKeyHash(){
      $date = new DateTime();
      $time = ''.$date->getTimestamp();
  
      $password = '$p@ceJumPTHE3e$tGAmE';
      $passwordArr = explode('e', $password);
  
      $password = '';
      $password .= $passwordArr[1];
      $password .= $passwordArr[0];
      $password .= $passwordArr[2];
  
      $time = substr($time, 0, -1);
      $time = (($time*20/54.231)+28572);
  
      $key = $time.$password;
      $key = hash_hmac('SHA256', $key, '$p@(eJu#p');
  
      return $key;
    }

    public function get($req, $varArray) {
      //Returns array of objects
      //Access by arrName[0]->variableName


      $res = $this->connection->prepare($req);
      $res->execute($varArray);
      $res->setFetchMode(PDO::FETCH_OBJ);

      $rowCount = $res->rowCount();
      $resArrr = array();

      for($i = 0; $i < $rowCount; $i++){
        array_push($resArrr, $res->fetch());
      }

      // return json_encode($resArrr);
      // $source = $_SERVER['HTTP_REFERER'];
      // if(strpos($source, 'API') === false){ 
        return $resArrr;
      // }else{
      //   return 'ACCESS DENIED';
      // }
    }
    public function post($req, $varArray, $incommingAuthKey='') {
      // $source = $_SERVER['HTTP_REFERER'];
      // if(strpos($source, 'API') === false && $incommingAuthKey === $this->getKeyHash()){ 
        $res = $this->connection->prepare($req);
        $res->execute($varArray);
      // }else{
      //   return 'ACCESS DENIED';
      // }
    }
  };
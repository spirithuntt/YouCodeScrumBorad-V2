<?php
session_start();
  function connection()
  {
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $servername = "localhost";
    $username = "root";
    $password = "";
    $databasename = "YouCodeScrumBorad";
    

    $connect = mysqli_connect($servername,$username,$password,$databasename);
    if (!$connect) {
        die("() failed: " . mysqli_connect_error());
      }
    
      // else echo "connected";
      return $connect;
    }
?>
 
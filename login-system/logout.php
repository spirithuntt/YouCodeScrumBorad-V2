<?php
unset($_SESSION['login']);
session_start();
session_destroy();
header("Location: ./login.php");?>
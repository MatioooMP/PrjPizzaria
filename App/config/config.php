<?php   

$db_host = 'localhost';
$db_port = 3306;
$db_name = "jspizzariadb";
$db_user = 'matheus';
$db_pwd = 'senac123';

$pdo = new PDO('mysql:host='.$db_host.';dbname='.$db_name,$db_user,$db_pwd);
<?php
ini_set( "display_errors", 0); 

    $host="localhost";
    $database="wide_pay";
    $user="root";
    $pass="";

//Realiza a Conexão com o Banco de Dados
$mysqli = mysqli_connect($host, $user, $pass, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Falha na Conexão: " . $mysqli->connect_error);
}

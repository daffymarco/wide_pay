<?php

require_once "../config/connect.php";

ob_start();
if (!isset($_SESSION)) {
    session_start();
}

//----------------------------------------------------------------------------
//-*** Arquivo responsável por inserir um novo cadastro no Banco de Dados ***-
//----------------------------------------------------------------------------

$file = $_FILES["file"]["name"]; //stores the original filename from the client
$tmp = $_FILES["file"]["tmp_name"]; //stores the name of the designated temporary file
$errorimg = $_FILES["file"]["error"]; //stores any error code resulting from the transfer

$login = filter_input(INPUT_POST, "login", FILTER_SANITIZE_STRING); //Get login
$pass = filter_input(INPUT_POST, "pass", FILTER_SANITIZE_STRING); //Get pass

//----------------------------------------------------------------------------

$fp = fopen($tmp, 'r');
$content = fread($fp, filesize($tmp));
$content = addslashes($content);
fclose($fp);

$sql_consult = "INSERT INTO user(username, password) VALUES( "
    . " '" . $login . "', "
    . " '" . sha1($pass) . "')";
    
// Execute Consult SQL
$mysqli->query($sql_consult);

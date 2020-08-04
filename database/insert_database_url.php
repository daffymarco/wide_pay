<?php

require_once "../config/connect.php";

ob_start();
if (!isset($_SESSION)) {
    session_start();
}

//----------------------------------------------------------------------------
//-*** Arquivo responsável por inserir um novo cadastro no Banco de Dados ***-
//----------------------------------------------------------------------------

$url = filter_input(INPUT_POST, "url"); //Get login

//----------------------------------------------------------------------------


$sql_consult = "INSERT INTO url_data(id_user, url) VALUES( "
    . " '" . $_SESSION['id_user'] . "', "
    . " '$url')";
    
// Execute Consult SQL
$mysqli->query($sql_consult);

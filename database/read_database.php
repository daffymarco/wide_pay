<?php

require_once "../config/connect.php";

ob_start();
if (!isset($_SESSION)) {
    session_start();
}


//----------------------------------------------------------------------------
// Recebe os parâmetros enviados via GET
$acao = (isset($_GET['acao'])) ? $_GET['acao'] : '';
$parametro = (isset($_GET['parametro'])) ? $_GET['parametro'] : '';


//----------------------------------------------------------------------------
//-------- *** Evento responsável por obter os dados dos clientes *** --------
//----------------------------------------------------------------------------
if ($acao == 'select_user') {
    $sql_consult = "SELECT * FROM url_data WHERE id_user =  " . $_SESSION['id_user'];

    $res_consult = $mysqli->query($sql_consult); // Execute Consult SQL

    //Cria um array
    $array = array();

    //Enquanto tiver dados para serem lidos
    while ($row = $res_consult->fetch_object()) {
        $array[] = array(
            "id" => $row->id,
            "url" => $row->url,
            "status" => $row->status,
            "date_read" => $row->date_read 
        );
    }

    $json = json_encode($array);
    echo $json;
}

//----------------------------------------------------------------------------
//------- *** Evento responsável por remover o cadastro do cliente *** -------
//----------------------------------------------------------------------------
if ($acao == 'remove') {
    $sql_consult = "DELETE FROM url_data WHERE id = " . $parametro;

    $mysqli->query($sql_consult); // Execute Consult SQL
}

//----------------------------------------------------------------------------

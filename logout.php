<?php
if (!isset($_SESSION)) {
    session_start();
}

session_destroy(); //Cancela a sessão

header('location:index.php'); //Redireciona para a index

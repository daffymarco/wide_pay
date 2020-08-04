<!-- Index da Página -->
<?php
    ob_start();
    if (!isset($_SESSION)) {
        session_start();
    }

    require_once "config/connect.php";

    require "modal/modal_register.php";
    require "modal/modal_alert.php";
    require "modal/modal_register_url.php";
    
?>
<html>
    <head>
        <!-- Required meta tags-->
        <meta charset="UTF-8">

        <title>Wide Pay</title>

        <!-- CSS-->
        <link rel="stylesheet" type="text/css" href="style/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="style/css/wide_pay.css">
        <!-- Jquery JS-->
        <script src="style/js/jquery.min.js"></script>
        <script src="style/js/bootstrap.min.js"></script>
        <script src="js/register.js"></script>
        <script src="./js/register_url.js"></script>
        
    </head>

    <body>
        <!-- *** Top Bar *** -->
        <div class="row container">
            <div class="col-md-12 topbar">
                <img class="topbar-logo" src="style/img/logo.png" alt="Wide Pay"/>
            </div> 
                <?php
                //Se não estiver logado, inclui a tela de login
                if (!isset($_SESSION['id_user'])) {
                    include("login.php");
                } else { //Se estiver logado
                    include("home.php"); //Inclui a tela da Home
                }
                ?>
            </div>
           
        </div>
            
    </body>
</html>

<?php

ob_start();
if (!isset($_SESSION)) {
    session_start();
}

$message = '';

    if (isset($_SESSION['id_user'])) { //Se já estiver logado, redireciona para a index
        header('location:index.php');
    } elseif (isset($_POST['login']) && isset($_POST['password'])) {
        $sql_consult = 'SELECT id FROM user WHERE username = "' . $_POST["login"] . '" AND password = sha1("' . $_POST["password"] . '")';

        $res_consult = $mysqli->query($sql_consult); // Execute Consult SQL
        
        //Enquanto tiver dados para serem lidos
        while ($row = $res_consult->fetch_object()) {
            $_SESSION['id_user'] = $row->id; //Obtem o ID do usuário logado
            header("Location:index.php"); //redireciona para a index
            //exit();
        }

        if (!isset($_SESSION['id_user'])) { //Se não conseguiu a informação
            $message = '<label>Login não encontrado</labe>'; //Exibe um erro na tela
        }
    }

?>

<!-- Tela de Login -->
    <div style="display:flex;flex-direction:column;width: 50%;margin: 0 auto;">
        <span style="color: red; text-align: center;"><?php echo $message; ?></span>
            <div class="col-md-8 screen_login">
        <form method="post" action="#" >
            <input type="text" class="form-control screen_login_input" id="l_login" name="login" placeholder="login" aria-label="login" aria-describedby="basic-addon2" autocomplete="off">
            <input type="password" class="form-control screen_login_input"  id="l_pass" name="password" placeholder="password" laceholder="password" aria-label="password" aria-describedby="basic-addon2" autocomplete="off">

            <input type="submit" class="btn btn-success screen_login_input" id="l_button" value="Logar">
            <input type="button" class="btn btn-danger screen_login_input" id="l_add" value="Cadastrar">
        </form>
    </div>
</div>
    
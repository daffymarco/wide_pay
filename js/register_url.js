
//------------------------------------------------------------------
function add_url(){
    $("#modal_register_url").modal('show');
}

//------------------------------------------------------------------
//------------- *** Função para Cadastrar um Cliente *** -----------
//------------------------------------------------------------------
$(document).on('click', '#register_url', function () {
    //Verifica se algum campo está vazio ou se as senhas não são iguais, se sim exibe uma modal de erro e retorna
    if ($("#input_url").val() == '') {
        $("#modal_alert_txt").html("Não pode existir campo vazio.");
        $("#modal_alert").modal('show'); //Show Modal
        $("#modal_alert_fechar").focus();

        return;
    }
 
    //Ajax para inserir o cadastro no BD
    $.ajax({
        type: 'POST',
        url: "database/insert_database_url.php",
        dataType: "text",
        data: {url: $("#input_url").val()},
        success: function (data) {
            popula_table(); //Chama a função para preencher a table
            $("#modal_sucess_txt").html('URL adicionada com Sucesso.'); //Troca o texto da modal
            $("#modal_register_url").modal('hide'); //Oculta a modal de cadastro
            $("#modal_sucess").modal("show"); //Exibe a modal de sucesso
        },
        error: function (request, status, error) { //Se erro, exibe no console.
            console.log('Status: ' + request.status + '\n' + error + '\n\n' + request.responseText);
        }
    });
});


//------------------------------------------------------------------
//------------------ *** Função Validar a URL *** ------------------
//------------------------------------------------------------------
$("#input_url").on("keyup change paste", function () {
    var url = $(this).val();
    console.log(url);
    var pass_url = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);

    if(pass_url) $("#register_url").attr("disabled", false);
    else  $("#register_url").attr("disabled", true);
});

//------------------------------------------------------------------

//------------------------------------------------------------------
//------------------ *** Ao Carregar a Página *** ------------------
//------------------------------------------------------------------
$(document).ready(function () {
    popula_table(); //Chama a função para preencher a table
});


//------------------------------------------------------------------
//------------- *** Função para Cadastrar um Cliente *** -----------
//------------------------------------------------------------------
$(document).on('click', '#register', function () {
    //Verifica se algum campo está vazio ou se as senhas não são iguais, se sim exibe uma modal de erro e retorna
    if ($("#login").val() == '' || $("#pass_a").val() == '') {
        $("#modal_alert_txt").html("Não pode existir campo vazio.");
        $("#modal_alert").modal('show'); //Show Modal
        $("#modal_alert_fechar").focus();

        return;
    } else if ($("#pass_a").val() != $("#pass_b").val()) {
        $("#modal_alert_txt").html("As senhas devem ser são iguais.");
        $("#modal_alert").modal('show'); //Show Modal
        $("#modal_alert_fechar").focus();

        return;
    }

    var formData = new FormData();
    formData.append('login', $("#login").val()); //Set login
    formData.append('pass', $("#pass_a").val()); //Set pass

    //Ajax para inserir o cadastro no BD
    $.ajax({
        type: 'POST',
        processData: false,
        contentType: false,
        url: "database/insert_database.php",
        dataType: "text",
        data: formData,
        success: function (data) {
            popula_table(); //Chama a função para preencher a table
            $("#modal_sucess_txt").html('Cliente adicionado com Sucesso.'); //Troca o texto da modal
            $("#modal_register").modal('hide'); //Oculta a modal de cadastro
            $("#modal_sucess").modal("show"); //Exibe a modal de sucesso
        },
        error: function (request, status, error) { //Se erro, exibe no console.
            console.log('Status: ' + request.status + '\n' + error + '\n\n' + request.responseText);
        }
    });
});

//------------------------------------------------------------------
//-------------------- *** Remove um Cadastro *** ------------------
//------------------------------------------------------------------
function Remove(id) {
    //Ajax para remover o cadastro
    $.ajax({
        type: 'GET',
        url: "database/read_database.php",
        dataType: "text",
        data: {
            acao: 'remove',
            parametro: id
        },
        success: function (data) {
            console.log(data);
            popula_table(); //Chama a função para preencher a table
            $("#modal_sucess_txt").html('URL removida com Sucesso.'); //Troca o texto da modal
        },
        error: function (request, status, error) { //Se erro, exibe no console.
            console.log('Status: ' + request.status + '\n' + error + '\n\n' + request.responseText);
        }
    });
}


//------------------------------------------------------------------
//------ *** Função Click para Exibir a Modal de Cadastro *** ------
//------------------------------------------------------------------
$(document).on('click', '#l_add', function () { Open_Modal(); }); //Click no Botão Cadastrar no Login
$(document).on('click', '#add', function () { Open_Modal_URL(); }); //Click no botão Cadastrar na Home


//------------------------------------------------------------------
//---------------- *** Função para Abrir a Modal *** ---------------
//------------------------------------------------------------------
function Open_Modal() {
    $("#login").val(''); //Set login
    $("#pass_a").val(''); //Set pass

    $("#modal_register_tit").val('Cadastrar novo Cliente'); //Set Text

    $("#pass").show(); //Show Pass
    $("#register").show(); //Show Register
    $("#button_upload").show(); //Show Button_upload

    $("#close").hide(); //Hide Button_upload

    $('#user_foto').attr('src', "style/img/guest.png"); //Set Default Image
    $("#modal_register").modal('show'); //Show Modal
}


//------------------------------------------------------------------
//---------------- *** Função para Abrir a Modal *** ---------------
//------------------------------------------------------------------
function Open_Modal_URL() {
    $("#login").val(''); //Set login
    $("#pass_a").val(''); //Set pass

    $("#modal_register_tit").val('Cadastrar novo Cliente'); //Set Text

    $("#pass").show(); //Show Pass
    $("#register").show(); //Show Register
    $("#button_upload").show(); //Show Button_upload

    $("#close").hide(); //Hide Button_upload

    $('#user_foto').attr('src', "style/img/guest.png"); //Set Default Image
    $("#modal_register").modal('show'); //Show Modal
}

//------------------------------------------------------------------
//-------------- *** Função para Preencher a Table *** -------------
//------------------------------------------------------------------
function popula_table() {
    //Se não tiver nenhum usuário logado, retorna
    //Ajax para Obter os dados
    $.ajax({
        type: 'GET',
        url: "database/read_database.php",
        dataType: "json",
        data: {
            acao: 'select_user'
        },
        success: function (data) {
            var tableRef = document.getElementById('tabela').getElementsByTagName('tbody')[0]; //Get Table Tbody
            var new_tbody = document.createElement('tbody'); //Create a new Tbody
            tableRef.parentNode.replaceChild(new_tbody, tableRef); //Replace old Tbody for a new Empty Tbody
            tableRef = document.getElementById('tabela').getElementsByTagName('tbody')[0]; //Get ogain the new Tbody

            //For each data row
            for (r = 0; r < data.length; r++) { //Enquanto tiver dados
                for (var i in data[r]) { //Enquanto tiver coluna
                    if (data[r][i] == null) { //If Data return_id is null
                        data[r][i] = ''; //Define empty value
                    }
                }

                var newRow = tableRef.insertRow(); // Insert a row in the table at the last row
                newRow.style.height = "0"; //Define 0 para a altura da linha
                var array = [ //Declara a array com os dados
                    data[r].url,
                    data[r].status,
                    data[r].date_read
                ];

                i = 0;
                //Enquanto tiver dados para serem lidos
                for (; i < array.length; i++) {
                    var cell = newRow.insertCell(i); //Insert a cell in the row at index i
                    cell.style.textAlign = "left"; //Define a posição como left
                    cell.style.height = "0"; //Define a altura como 0

                    var text = document.createTextNode(array[i]); // Append a text node to the cell
                    cell.appendChild(text); //Adiciona a coluna na tabela
                }

                //------------------------------------------------------------------
                //Create Button Remove
                //------------------------------------------------------------------
                var cell = newRow.insertCell(i++); //Insert a cell in the row at index 
                var input = document.createElement("img"); //Create new Button Icon
                input.type = "button";
                input.src = "style/img/remove.png";
                input.style.width = 17 + "px";
                input.style.height = input.style.width;
                input.style.margin = 5 + "px";
                input.className = "ButtonRemove";
                input.title = "Remover URL";
                input.id = data[r].id;
                input.style.cursor = "pointer";
                input.onclick = function () { //Define Button Click
                    Remove(this.id);
                    return false;
                };

                cell.style.float = "left";
                cell.appendChild(input); //Insert new Button in the new Cell

            }
        }
    });
}

//------------------------------------------------------------------

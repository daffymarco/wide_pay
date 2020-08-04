
<!-- *** Modal com os Campos para Cadastro e Exibição dos Detalhes *** -->
<div class="modal fade modal_register" id="modal_register" tabindex="-1" role="dialog" aria-labelledby="modal_register" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal_register_tit">Cadastrar novo Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">

                <!-- *** Campo para Digitar *** -->
                <div class="col-md-8 field-typing">
                    <input type="text" class="form-control input" id="login" placeholder="login" aria-label="login" aria-describedby="basic-addon2">
                    
                    <div class="pass" id="pass">
                        <input type="password" class="form-control input-pass-a"  id="pass_a" placeholder="password" laceholder="password" aria-label="password" aria-describedby="basic-addon2">
                        <input type="password" class="form-control input-pass-b"  id="pass_b" placeholder="confirme o password" aria-label="confirme o password" aria-describedby="basic-addon2">
                    </div>


                    <input class="btn btn-success button-send" type="button" id="register" value="Salvar">
                    <input class="btn btn-danger button-close" type="button" data-dismiss="modal" id="close" value="Fechar">
                </div>
                
            </div>
            
    </div>
  </div>
</div>
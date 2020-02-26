
new Vue({
    el: '#app-login',
    template: `
        <div class="row">
            <div class="card col m4 offset-m4 s12">
            <h3 class="flow-text teal-text center-align">TELA DE LOGIN</h3>
            <form action="#" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="matricula" id="matricula" type="text" class="validate">
                        <label for="matricula">Matrícula</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="senha" id="senha" type="password" class="validate">
                        <label for="senha">Senha</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s7 right-align">
                        <a href="#modal1" class="waves-effect waves-light modal-trigger">Ainda não tem acesso? Clique aqui!</a>
                    </div>
                    <div class="input-field col s5">
                        <button v-on:click="logar" type="submit" class="btn waves-effect waves-light right" id="btn-login" name="entrar">Entrar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
            </div> 
        </div>                      
    `,
    data(){
        return {
            matricula: '',
            senha: '',
        }
    },
    methods: {
        logar(){
            alert(this.matricula+"-"+this.senha);
        }
    }
})

/* SWEET ALERT QUANDO LOGAR */
$("#btn-login").click(function(){

    Swal.fire(
        '',
        'LOGIN EFETUADO COM SUCESSO!',
        'success'
    )
});

/* INSTANCIA O MODAL */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

$(document).ready(function(){
    $('.modal').modal();
});
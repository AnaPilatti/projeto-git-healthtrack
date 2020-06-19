
function validarNome(){
  let nome = $("#inputName").val();
  let sobrenome = $("#inputSobrenome").val();
  if(nome.trim()==""||nome.trim()==""){
    return false;
  }
  return true;
}

function ehEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function validaData(){
  let dataNasc = $("#inputDataNascimento").val();
  if(dataNasc.trim()==""){
    return false;
  }
  return true;

}

function validarEmail(){
  let email = $("#inputEmail").val();
  let confirmaEmail = $("#inputEmail2").val();
  if(ehEmail(email) && ehEmail(confirmaEmail)){
    if(email.trim()==""||confirmaEmail.trim()==""){
      return false;
    }
    if(email!==confirmaEmail){
      return false;
    }
  }
  else {
    return false;
  }
  return true;
}
function senhaValida(){
  let senha = $("#inputPassword").val();
  let verificaSenha = $("#inputPassword2").val();
  if(senha.trim()==""||verificaSenha.trim()==""){
    return false;
  }
  if(senha.length<6||verificaSenha.length<6){
    return false;
  }
  if(senha!==verificaSenha){
    return false;
  }
  return true;
}

$(document).ready(function(){


  $("#btnCadastrar").on("click", function(){
    let campos_ok=false;

    campos_ok = validarNome();
    if(!campos_ok){
      $("#inputName").focus();
      alert("Você precisa preencher seu nome e sobrenome para continuar");
      return false;
    }
    campos_ok = validaData();
    if(!campos_ok){
      $("#inputDataNascimento").focus();
      alert("Você precisa preencher sua data de nascimento para continuar");
      return false;
    }
    campos_ok = validarEmail();
    if(!campos_ok){
      alert("Favor preencher os campos de e-mail corretamente");
      $("#inputEmail").focus();
      return false;
    }
    campos_ok = senhaValida();
    if(!campos_ok){
      alert("Favor preencher os campos de senha corretamente");
      $("#inputPassword").focus();
      return false;
    }
    if($("#chkTermos").is(':checked')){
      return true;
    }
    else{
      alert("Você precisa aceitar os termos antes de prosseguir");
      return false;
    }
 });


});

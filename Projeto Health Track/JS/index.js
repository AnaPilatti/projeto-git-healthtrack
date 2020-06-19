function ehEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(document).ready(function(){

  $("#btnLogar").on("click", function(){
    if(!ehEmail($("#email").val())) {
      alert("Usuário inválido!");
      $("#email").focus();
      return false;
    }
    if($("#pass").val().length<6){
      alert("Senha inválida!");
      $("#pass").focus();
      return false;
    }
    window.location.href="dashboard.html";
    return false;
  });

});

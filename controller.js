//Validar acesso em tela de login
 
function acessar (){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
      //  alert("Campos preenchidos com sucesso");
      window.location.href = "cadastro.html";
    }
   
}
 
 
// FUNÇAO QUE ARMAZENA EM ARRAY NOME NA TELA DE CASDASTRO
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadoslista);
        criarlista();
        document.getElementById("nomeUser").value = "";
    }else{
        alert("Favor informa o nome cadastrado");
    }
}
 
//funçao para criar lista
function criarlista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nome Usuario</th><th>Açoes</th</tr>";
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>"  +  dadosLista[i] + "</td><td></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// VAR

var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Ola Senhor'; 
    if(true) { 
        var mensagemDentroDoIf = 'Dentro'; 
        console.log(mensagemDentroDoIf)// Dentro ;
    } 
    console.log(mensagemForaDoIf); // Ola Senhor

    console.log(mensagemDentroDoIf); // Dentro

    exibeMensagem(); // Imprime 'Dentro', 'Ola Senhor' e 'Dentro'

}



var exibeMensagem = function() { 
    mensagem = 'Ola Senhor'; 
    console.log(mensagem); 
    var mensagem;

    exibeMensagem(); // Imprime 'Ola Senhor'
}

// LET


var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Davi'; 
        let escopoBloco = 'Afonso';

       console.log(escopoBloco); // Afonso 
   } 
   console.log(escopoFuncao); // Davi 
   console.log(escopoBloco); 

   exibeMensagem(); // Imprimi 'Afonso', 'Davi' e dá um erro
}

// CONST

void function(){ 
    const mensagem = 'Bom dia'; 
    console.log(mensagem); // Bom dia
    mensagem = 'Boa noite'; 

    // ERROR

    // constante válida 
const peso = 50;

// constante inválida: onde está a inicialização? 
//const idade;


}();
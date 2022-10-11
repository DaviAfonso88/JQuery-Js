$(document).ready(function(){
    $("textarea").bind("input keiup paste", function(){
        var maximo = 100;
        var disponivel = maximo - $(this).val().length
        if(disponivel < 0){
           var texto = $(this).val().substr(0, maximo)
            $(this).val(texto);
            disponivel = 0;
        } 
      
        
        $(".contagem").text(disponivel);


    });


    

   
});
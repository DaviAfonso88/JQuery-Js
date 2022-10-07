$(document).ready(function () {
    /*$(":text").keyup(function(){
        $("#msg").text($(this).val());
    }).focus(function(){
        $(this).css("background", "yellow");
        $("#msg").text("Focus");
    });

    $("form").submit(function(){
        if($(":text").val() == "Davi") {
            return true; 
        }
        return false;  
    });

        $("select").change(function(){
        //  var escolha = $("option:selected").text(); 
        $("#msg").text("Escolhido : " + $("option:selected").text());     

    });
    
        $("textarea").select(function(){
        $("#msg").text("Selecionou");

    });*/




    /*$(":text").keyup(function(e){

        $("#msg").text($(this).val());

    });


    $(":text").bind("keyup",function(e){

        $("#msg").text($(this).val());

    });*/



    // parametro objeto event (e)
    function msg(e) {
        $("#msg").text($(this).val())

    }


    $(":text").bind("keyup focus blur", msg);
    // $(":text").keyup(msg).focus(msg).blur(msg);


    $(":button").bind("click", function () {
       // $(":text").unibind("keyup", msg);

       // $(":text").val("Texto incluido via jQuery");
        //$(':text').trigger("focus");  //forçar o disparo de um evento sem interagir com documento (função)
        

        $("fieldset").prepend("Outro:<input type='text' name='Outro'/>");
        $("fieldset").delegate(":text", "keyup", msg);
    });


      // imagem
    $(":button").bind("click", function (e, src, width){

          // atribuindo src na função e largura
        $("#msg").append($("<img/>").attr("src", src).css("width", widht));
      
    });
     //disparar evento click informando os parametros "arrays"
     $(":button").trigger("click",["https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg", "90px"])
















});
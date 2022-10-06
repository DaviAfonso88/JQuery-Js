$(document).ready(function(){
    $(":text").keyup(function(){
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

    });
});
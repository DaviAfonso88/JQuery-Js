$(document).ready(function(){
    $("span").click(function(){


        alert($("img").css("width"));
        alert($("img").css("height"));

        $("img").css({
            width:"300px",
            background:"#00FF00",
            border:"30px solid yellow"
        });


        alert($("img").hasClass("imagem"))
        $("img").removeClass("imagem")
        $("img").addClass("destaque") 
        $("img").wrap("<p></p>");

        //largura e altura
       alert($("img").width())
       alert($("img").innerwidht())

       //posição

       alert($("img").position().top);
       alert($("img").position().left);
       alert($("img").offset().top);
        alert($("img").offset().left);

       
    

    

     








    });


});



 





     

    










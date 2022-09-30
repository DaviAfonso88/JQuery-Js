$(document).ready(function(){
    $(":input").css("border","3px solid black");
    $(":button").css("border","3px solid green");

    $(":button").click(function(){
        $(":button").css("border","3px solid blue")
 

    });

    $(":button").click(function(){
        $(":text").css("border","3px solid blue")
 

    });

    $(":button").click(function(){
        $(":radio").css("border","3px solid yellow")
 

    });

    $(":button").click(function(){
        $(":radio").parent().css("border","3px solid red")
 

    });

    $(":button").click(function(){
        $(":checkbox").parent().css("border","3px solid pink")
 

    });

    $(":button").click(function(){
        $(":textarea").css("border","3px solid red")
 

    });

    $(":button").click(function(){
        $(":submit").css("border","3px solid red")
 

    });



    



    
    
  
    
   
    
    
});
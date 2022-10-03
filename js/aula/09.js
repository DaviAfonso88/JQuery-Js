$(document).ready(function(){
    $("button").click(function(){

        alert($("textarea").html());

    });

    $('textarea')
    .focus(function() { $(this).css('background', 'none') })
    .blur(function() { if ($(this)[0].value == '') { $(this).css('background', 'blue') } });
    



    



    
    
  
    
   
    
    
});


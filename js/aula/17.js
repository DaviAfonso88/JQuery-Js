$(document).ready(function(){
  $("span:eq(0)").click(function(){
    $("div").hide("slow"); //normal, fast, slow
  });


  $("span:eq(1)").click(function(){
    $("div").show("slow"); 
  });

  $("span:eq(2)").click(function(){
    $("div").toggle("slow"); 
  });


  $("span:eq(3)").click(function(){
    $("div").fadeOut("slow"); 
    $("div").fadeIn("slow");
    $("div").fadeTo("slow",0.3); //nivel de opacidade
    $("div").fadeToggle("slow");

  });


  $("span:eq(4)").click(function(){
    $("div").slideUp("slow");
    $("div").slideDown("slow");
    $("div").slideToggle("slow");
  

  })


    
});
$(document).ready(function(){
    $("td:contains(Davi)").css("background-color", "green");
  
    //celulas vazias
    $("td:empty").css("background-color", "green");
    $("td:not(td:empty)").css("background-color", "yellow");
    $("table tr:first").css("background-color", "black");
    $("td:has(strong)").css("background-color", "green");
    $("td:empty").css("background-color", "blue");

    
    
});
$(document).ready(function(){
    //descendente
    $("div span").css("background-color", "yellow");
    //filhos do elemento
    $("li > ul").css("color", "red");
    //irmãos do elemento
    $("#Item1_1 + li").css("color", "blue");
    //todos os irmãos do elemnto
    $("#Item1_1 ~ li").css("color", "blue");
   
});
$(document).ready(function(){
    $("table tr").css("background-color", "#CCC");
    $("table tr:not(tr:last) and (tr:first)").css("background-color", "#CCC");
    $("table tr:odd").css("background-color", "#CCC");
    $("table tr:even").css("background-color", "#CCC");
    $("table tr:first").css("background-color", "black");
    //posição
    $("table tr:eq(1)").css("background-color", "red");
    $("table tr:eq(3)").css("background-color", "red");
    //posição maior
    $("table tr:gt(2)").css("background-color", "red");
    //posição menor
    $("table tr:lt(2)").css("background-color", "red");
    
});
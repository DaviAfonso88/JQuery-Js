
/* UI */

$(function(){
    $("#accordion").accordion({collapsible:true});


});


/* UI2 */


$(function(){
    var dados = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "Cobol",
    "PHP",
    "Python"
    ];

    $("#tags").autocomplete({
        source: dados
    });
});


/* UI3 */


$("#city").autocomplete({
    source: function(request, responde){
        $.ajax({
            url:"http://ws.geonames.org/searchJSON",
            dataType: "jsonp",
            data: {
                featureClass: "P",
                style: "full",
                maxRows: 12,
                name_startsWith: request.term
            },
            success: function(data){
                responde($.map(data.geonames, function(item){
                    return {
                        label: item.name + (item.adminName1 ? "," +item.adminName1 : "") + ", " + item.countryName,
                        value: item.name
                    }
                }));

            }
        })
    }
    
});


/* UI4 */


$(function(){
    $("a").button({
        icons: {primary: "ui-icon-lightbulb"},
        text: false
    });

    $("#checks").buttonset();
    $("#radios").buttonset();

})


/* UI5 */


$(function(){
    $("#date").datepicker({
        showOn:"button",
      
    });

    $("#date").datepicker({
        showOn:"button",
      
    });
})


/* UI6 */


$(function(){
    $("#dialog").dialog({
        heigth:140,
        modal: true,
        buttons: {
            "deletar todos":function(){
                $(this).dialog("close")
            },
            cancel: function(){
                $(this).dialog("close");
            }
        }
    });
});



/* UI7 */


$(function(){
    $("#drag").draggable();
    $("#drop").droppable({
        drop:function(event, ui){
           $(this).addClass("ui-state-highlight")
           .find("p")
           .html("Colocado");
        }
    });
});


/* UI8 */


$(function(){
    $("#catalogo li").draggable();
    $("#carrinho ul").droppable({
        drop:function(event, ui){
           $(this).append($("<li/>").text(ui.draggable.text()))
           $(this).find(".mensagem").remove()
           
        }
    });
});


/* UI9 */


$(function(){
    $("#progresso").progressbar({
        value:30
    });
    
});


/* UI10 */


$(function(){
    $("#resizable").resizable();
   
    
});


/* UI11 */


$(function () {
    $("#tabs").tabs();


});


/* UI12 */


    $(function () {
        $("#slider").slider({
            min: 10,
            max: 100,
            value: 60,
            slide: function(event, ui){
                  $("#valor").val(ui.value)
            }
        }); 
        


    }); 

    $(function () {
        $("#slider").slider({
            min: 1,
            max: 100,
            value: 50,
            orientation: "vertical",
            slide: function(event, ui){
                  $("#valor").val(ui.value)
            }
        });
        


    });


/* UI13 */


    $(function(){
        $("#selectable").selectable();
    })


    /* UI14 */


    $(function(){
        $("#sortable").sortable();
    })




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
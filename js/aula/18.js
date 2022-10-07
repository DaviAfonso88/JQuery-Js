$(document).ready(function(){
    $("#filmes tbody tr:odd").addClass("impar");
   // $("#filmes tbody tr:nth-child(3)").addClass("impar");
   // $("#filmes tbody tr:nth-child(4n-1)").addClass("impar");
    //$("#filmes tbody tr:nth-child(4n)").addClass("impar");


    //$("#filmes tbody tr").hover
    //(function(){$(this).addClass("destaque");},
   // function(){$(this).removeClass("destaque")});


    $("#filmes thead tr th")
    //.not("th:first-child")
    .prepend("<span></span>")
    .css("cursor", "pointer")
    $("#filmes thead tr th").each(function(i){ //each i =posição do elemento
        var n = i ;
        $(this).click(function(){
            $("td").removeClass("destaque");
            $(this)
            .parents("thead")
            .siblings("tbody")
            .children("tr").each(function(){
                $(this).children("td:eq("+n+")")
                .addClass("destaque")

            });

            alert("click");
        });
    });


    $("#filmes tbody tr:odd").addClass("impar");

    $("#filmes thead tr th").each(function(i){
        var n = i + 1;
        var nomeColuna = $(this).text();

        $("tr td:nth-child("+n+")").hover(function(){
            var nomeCelula = $(this).text();
            $(this).addClass("destaque")
            .prepend("<div class='tooltip'>Coluna "+ nomeColuna +"<br/> Celula "+nomeCelula+"</div>")
            $(this).click(function(){

                $(".tooltip").remove("destaque");
                $("tbody tr").removeClass("destaque");
                $("tbody tr:contains("+ nomeCelula+")")
                .addClass("destaque");
               
            });
    
        }, function(){
            $(this).removeClass("destaque");
            $(".tooltip").remove();
    
    
        });

    });


    

  
  
      
});
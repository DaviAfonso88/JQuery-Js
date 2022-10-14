$(document).ready(function(){
    $(":input").bind("keydown", function(e){
        var keyCode = e.which;
        var isStandard = (keyCode >47 && keyCode < 58)
        var isOther = (",8,46,37,38,39,40,".indexOf(","+keyCode+",") > -1);
        if(isStandard | isOther){
            return true;
        } else{
            return false;
        }

    })





    

   
});
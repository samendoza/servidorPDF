$(document).ready(function(){
    var style = $("style").html();
    console.log(style);
    var html = $("#contenedor").html();
    console.log(html);
    $("#style").attr('value',style);
    $("#html").attr('value',html);
            
    /*$("#form").submit(function(event){
        event.preventDefault();
    });*/
    
});
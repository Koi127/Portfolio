/* global $ */

$(document).ready(function(){
    $("#aboutMe").click(function(){
        $("#about").slideToggle();
    });

    $("#contact").click(function(){
        $("#phone").slideToggle();
    });

});
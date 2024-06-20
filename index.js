$(document).ready(function () {

    $("textarea").keyup(function () {

        var max = 100;
        var x = $("textarea").val().length;
        //console.log(x);

        var write = max - x;
        $(".character").text(write);

    });

});
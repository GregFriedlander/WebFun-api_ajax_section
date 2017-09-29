$(document).ready(function(){
    $('.city').val("Enter City...");
    $("form").submit(function(){
        var url = "https://api.openweathermap.org/data/2.5/weather?q=";
        var city = $('.city').val();
        var key = "&&appid=df14c0bbfa28cf7a070451376a09de46";
        url += city;
        url += key;
        $.get(url, function(res){
            var htmlStr = "";
            htmlStr += "<h1>";
            htmlStr += res.name;
            htmlStr += "</h1>";
            htmlStr += "<h3>";
            htmlStr += "Temperature: ";
            htmlStr += Math.round((9/5)*(res.main.temp - 273)+32);
            htmlStr += "</h3>";
            $("#weather").html(htmlStr);
            $('.city').val("");
        }, "json");
        return false;
    });
})
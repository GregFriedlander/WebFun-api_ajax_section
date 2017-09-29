$(document).ready(function(){
    $("#description").hide();
    $(".baratheon").click(function(){
        $.get("https://anapioficeandfire.com/api/houses/15", function(res){
            var htmlString = "";
            htmlString += "<h1>";
            htmlString += res.name;
            htmlString += "</h1>";
            htmlString += "<h3>'";
            htmlString += res.coatOfArms;
            htmlString += "'</h3>";
            htmlString += "<h4>Titles: "
            for(var x = 0; x < res.titles.length; x++){
                htmlString += res.titles[x] + ", ";
                if(x = res.titles.length-1){
                    htmlString += res.titles[x];
                }
            }
            htmlString += "</h4>";
            $("#description").show();
            $("#description").html(htmlString);
        }, "json");
    });
    $(".lannister").click(function(){
        $.get("https://anapioficeandfire.com/api/houses/229", function(res){
            var htmlString = "";
            htmlString += "<h1>";
            htmlString += res.name;
            htmlString += "</h1>";
            htmlString += "<h3>'";
            htmlString += res.coatOfArms;
            htmlString += "'</h3>";
            htmlString += "<h4>Titles: "
            for(var x = 0; x < res.titles.length; x++){
                htmlString += res.titles[x] + ", ";
                if(x = res.titles.length-1){
                    htmlString += res.titles[x];
                }
            }
            htmlString += "</h4>";
            $("#description").show();
            $("#description").html(htmlString);
        }, "json");
    });
    $(".stark").click(function(){
        $.get("https://anapioficeandfire.com/api/houses/362", function(res){
            var htmlString = "";
            htmlString += "<h1>";
            htmlString += res.name;
            htmlString += "</h1>";
            htmlString += "<h3>'";
            htmlString += res.coatOfArms;
            htmlString += "'</h3>";
            htmlString += "<h4>Titles: "
            for(var x = 0; x < res.titles.length; x++){
                htmlString += res.titles[x] + ", ";
                if(x = res.titles.length-1){
                    htmlString += res.titles[x];
                }
            }
            htmlString += "</h4>";
            $("#description").show();
            $("#description").html(htmlString);
        }, "json");
    });
    $(".targaryen").click(function(){
        $.get("https://anapioficeandfire.com/api/houses/378", function(res){
            var htmlString = "";
            htmlString += "<h1>";
            htmlString += res.name;
            htmlString += "</h1>";
            htmlString += "<h3>'";
            htmlString += res.coatOfArms;
            htmlString += "'</h3>";
            htmlString += "<h4>Titles: "
            for(var x = 0; x < res.titles.length; x++){
                htmlString += res.titles[x] + ", ";
                if(x = res.titles.length-1){
                    htmlString += res.titles[x];
                }
            }
            htmlString += "</h4>";
            $("#description").show();
            $("#description").html(htmlString);
        }, "json");
    });
});
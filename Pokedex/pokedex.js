$(document).ready(function(){
    for(var i = 1; i < 152; i++) {
        $("#pokemon").append('<img id="'+[i]+'" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+[i]+'.png">');
    };
        $("img").click(function(){ 
            var pokemon = this.id;
            $.get("https://pokeapi.co/api/v2/pokemon/" + pokemon, function(res){
                var htmlStr = "";
                htmlStr += "<h1>";
                htmlStr += res.name;
                htmlStr += "</h1>";
                htmlStr += "<img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon +".png'>";
                htmlStr += "<h3>Types</h3>";
                htmlStr += "<ul>";
                for(var x = 0; x < res.types.length; x++) {
                    htmlStr += "<li>" + res.types[x].type.name + "</li>";
                }
                htmlStr += "</ul>";
                htmlStr += "<h3>Height</h3>";
                htmlStr += res.height;
                htmlStr += "<h3>Weight</h3>";
                htmlStr += res.weight;
                $("#index").html(htmlStr);
            }, "json");     
        })
}); 
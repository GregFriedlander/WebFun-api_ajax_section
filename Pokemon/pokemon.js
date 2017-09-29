$(document).ready(function(){
    for(var i = 1; i < 152; i++) {
        $("#mainsection").append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+[i]+'.png">');
        // $("#mainsection").append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`);
    };
})
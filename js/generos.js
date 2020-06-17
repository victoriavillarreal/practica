window.onload = function() {

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    
    .then (function (respuesta) {
        return respuesta.json();
    })
    .then (function(informacionGeneros){
        console.log(informacionGeneros);

        var genero = document.querySelector(".body");

        var contenidoGenero = "";

        for (let i = 0; i < informacionGeneros.data.length; i++) {
            var element = informacionGeneros.data[i];
            var generoId = element.id;

            if (window == onload) {
                contenidoTrack += "<div uk-spinner></div>"
            } else {
                contenidoGenero += "<div class='fotos'>";
                contenidoGenero += "<div class='caja uk-animation-toggle'>";
                contenidoGenero += "<div class='caja-adentro'>";
                contenidoGenero += "<img src='" + element.picture_big + "' class='secciones uk-card uk-card-default  uk-animation-slide-bottom-small' >";
                contenidoGenero += "<a href='detail.html?generoId=" + generoId + "'>";
                contenidoGenero += "<p class='uk-card uk-card-default  uk-animation-slide-bottom-small'>" + element.name + "</p>";
                contenidoGenero += "</a>";
                contenidoGenero += "</div>";
                contenidoGenero += "</div>";
                contenidoGenero += "</div>";
            }
            
        }

        genero.innerHTML = contenidoGenero;
    })
    .catch (function (error){
        console.log("El error fue" + error);
    })
















// no borrar
}
// no borrar
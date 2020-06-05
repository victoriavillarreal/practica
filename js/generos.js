window.onload = function() {

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    
    .then (function (respuesta) {
        return respuesta.json();
    })
    .then (function(informacionGeneros){
        console.log(informacionGeneros);

        var genero = document.querySelector(".caja");

        var contenidoGenero = "";

        for (let i = 0; i < informacionGeneros.data.length; i++) {
            var element = informacionGeneros.data[i];

            contenidoGenero += "<div>";
            contenidoGenero += "<img src='" + element.picture_big + "' class='secciones' >";
            contenidoGenero += "<a href='detail.html?cancionId=" + element.id + "'>";
            contenidoGenero += "<p>" + element.name + "</p>";
            contenidoGenero += "</a>";
            contenidoGenero += "</div>";
            
        }

        genero.innerHTML = contenidoGenero;
    })
    .catch (function (error){
        console.log("El error fue" + error);
    })
















// no borrar
}
// no borrar
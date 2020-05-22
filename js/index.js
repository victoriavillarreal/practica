window.onload = function() {


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/tracks")

    .then (function (respuesta) {
        return respuesta.json();
    })
    .then (function (informacionTracks) {
        console.log(informacionTracks);

        var track = document.querySelector(".tracks");
        
        var contenidoTrack = "";

        for (let i = 0; i < informacionTracks.data.length; i++) {
            var element = informacionTracks.data[i];

            contenidoTrack += "<div class='caja'>";
            contenidoTrack += "<img src='" + element.artist.picture_big + "' alt='' class='secciones' >";
            contenidoTrack += "<p>" + element.title + "</p>";
            contenidoTrack += "</div>";
        }

        track.innerHTML = contenidoTrack;

    })
    .catch (function (error){
        console.log("El error fue" + error);
    })















// no borrar
}
// no borrar
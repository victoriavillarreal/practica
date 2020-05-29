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
            contenidoTrack += "<a href='detail.html#querystring'>";
            contenidoTrack += "<p>" + element.title + "</p>";
            contenidoTrack += "</a>";
            contenidoTrack += "</div>";
        }

        track.innerHTML = contenidoTrack;

    })
    .catch (function (error){
        console.log("El error fue" + error);
    })


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/albums/albums")

    .then (function (respuestaAlbums) {
        return respuestaAlbums.json();
    })
    .then (function (informacionAlbums) {
        console.log(informacionAlbums);

        var album = document.querySelector(".albums");
        
        var contenidoAlbum = "";

        for (let i = 0; i < informacionAlbums.data.length; i++) {
            var element = informacionAlbums.data[i];

            contenidoAlbum += "<div class='caja'>";
            contenidoAlbum += "<img src='" + element.artist.picture_big + "' alt='' class='secciones' >";
            contenidoAlbum += "<a href='detail.html#querystring'>";
            contenidoAlbum += "<p>" + element.title + "</p>";
            contenidoAlbum += "</a>";
            contenidoAlbum += "</div>";
            
        }

        album.innerHTML = contenidoAlbum;

    })














// no borrar
}
// no borrar
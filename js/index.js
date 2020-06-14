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
            var cancionId = element.id;

            contenidoTrack += "<div class='caja'>";
            contenidoTrack += '<div>';
            contenidoTrack += "<img src='" + element.artist.picture_big + "' alt='' class='secciones' >";
            contenidoTrack += '</div>'
            contenidoTrack += "<a href='detail.html?cancionId=" + cancionId +"'>";
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
            var albumId = element.id;

            contenidoAlbum += "<div class='caja'>";
            contenidoAlbum += "<img src='" + element.cover + "' alt='' class='secciones' >";
            contenidoAlbum += "<a href='detail.html?albumId=" + albumId +"'>";
            contenidoAlbum += "<p>" + element.title + "</p>";
            contenidoAlbum += "</a>";
            contenidoAlbum += "</div>";
            
        }

        album.innerHTML = contenidoAlbum;

    })

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artists/artists")

    .then (function (respuestaArtists) {
        return respuestaArtists.json();
    })
    .then (function (informacionArtists) {
        console.log(informacionArtists);

        var artists = document.querySelector(".artists");
        
        var contenidoArtists = "";

        for (let i = 0; i < informacionArtists.data.length; i++) {
            var element = informacionArtists.data[i];
            var artistId = element.id;

            contenidoArtists += "<div class='caja'>";
            contenidoArtists += "<img src='" + element.picture_big + "' alt='' class='secciones' >";
            contenidoArtists += "<a href='detail.html?artistId=" + artistId +"'>";
            contenidoArtists += "<p>" + element.name + "</p>";
            contenidoArtists += "</a>";
            contenidoArtists += "</div>";
            
        }

        artists.innerHTML = contenidoArtists;

    })


    //js buscador
    document.addEventListener("touchstart", function(){}, true);
    //js buscador


    //PAGINA DE BIENVENIDA

    
    var titulo = document.querySelector('#titulo');


   var saludo = document.getElementById('saludo');

   var span = document.querySelector('.bienvenida span');
   var container = document.querySelector(".container")
   var all = document.querySelector('body');



   /* Evento para el título */
   titulo.onmouseover = function() {
      var nombre = prompt('¿Como te llamas?');

      if (nombre == null || nombre == "") {
        saludo.innerHTML = "bienvid@";
     } else {
        saludo.innerHTML = "bienvid@ " + nombre;
     }   

      saludo.style.textTransform = 'uppercase';

      titulo.style.display = "none";
      span.style.display = "block";
    

   }





 
   /* Evento para el span */
   span.addEventListener("click", mostrarPersonajes);

   function mostrarPersonajes() {
      var bienvenida = document.querySelector('.bienvenida');
      var personajes = document.querySelector('.personajes');


      bienvenida.style.display = "none";
      personajes.style.display = "block";
      container.style.display = "flex";
      document.body.style.backgroundImage = "url('img/fondo.jpg')";
      document.body.style.height = "fit-content";
      document.body.style.backgroundSize = "initial";

   };


   
   






// no borrar
}
// no borrar
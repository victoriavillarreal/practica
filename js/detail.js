window.onload = function(){

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);


if(queryStringObj.has("cancionId")){
    var detailCancionId = queryStringObj.get("cancionId");
    traemeCancion(detailCancionId);
}

else if(queryStringObj.has("albumId")){
    var detailAlbumId = queryStringObj.get("albumId");
    traemeAlbum(detailAlbumId);
}

else if (queryStringObj.has("artistId")){
    var detailArtistId = queryStringObj.get("artistId");
    traemeArtist(detailArtistId);
}

else if (queryStringObj.has("playlistId")){
    var detailPlaylistId = queryStringObj.get("playlistId");
    traemePlaylist(detailPlaylistId);
}

else{
    var detailGeneroId = queryStringObj.get("generoId");
    traemeGenero(detailGeneroId);
}

;



function traemeCancion(detailCancionId){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + detailCancionId)

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionDetailCancion) {
       console.log(informacionDetailCancion);

       var contenedorTracks = document.querySelector("..contenedor-todo");
       
       var contenidoTracks = "";


        var element = informacionDetailCancion;
           var albumId = element.album.id;
           var artistId = element.artist.id;
           var playlistCancionId = element.id;
           
            contenidoTracks += '<div class = "titulos">'
            contenidoTracks += '<h2> TRACK </h2>'
            contenidoTracks += '</div>'
           contenidoTracks += "<div class='body bodytrack'>";
           contenidoTracks += "<div class='lasfotos'>";
           contenidoTracks += "<div class='cancion'>";
           contenidoTracks += "<h2>" + element.title + "</h2>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='fotos'>";
           contenidoTracks += "<div class='dato'>";
           contenidoTracks += "<img src='" + element.artist.picture_medium + "' alt='' class='secciones margin ftrack' >";
           contenidoTracks += "<p class='track'> Portada </p>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='dato'>";
           contenidoTracks += "<img src='" + element.album.cover + "' alt='' class='secciones margin ftrack' >";
           contenidoTracks += "<a href='detail.html?albumId=" + albumId +"'> Album:" + element.album.title + "</a>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='dato'>";
           contenidoTracks += "<img src='" + element.artist.picture_big + "' alt='' class='secciones margin ftrack' >";
           contenidoTracks += "<a href='detail.html?artistId=" + artistId +"'> Artist:" + element.artist.name + "</a>";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='losdetalles'>";
           contenidoTracks += "<div class='fecha'>";
           contenidoTracks += "<p> Release date:" + element.release_date +  "</p>";
           contenidoTracks += "<p> Duration: " + element.duration +  " seconds</p>";
           contenidoTracks += "</div>";
           contenidoTracks += "<a href='playlist.html?playlistCancionId=" + playlistCancionId + "' class='agregar'><p>Add to playlist</p></a> ";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";


       contenedorTracks.innerHTML = contenidoTracks;

   })
}

var cancionPlaylist = window.localStorage.getItem("playlistCancionId");

window.localStorage.setItem('playlistCancionId', cancionPlaylist);

console.log('cancionPlaylist');

function traemeAlbum(detailAlbumId){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + detailAlbumId)

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionDetailAlbum) {
       console.log(informacionDetailAlbum);

       var contenedorAlbum = document.querySelector(".contenedor-todo");
       
       var contenidoAlbum = "";


           var element = informacionDetailAlbum;
           var artistId = element.artist.id;
           
            contenidoAlbum += '<div class = "titulos">'
            contenidoAlbum  += '<h2> ALBUM </h2>'
            contenidoAlbum  += '</div>'
            contenidoAlbum  += "<div class='body bodytrack'>";
            contenidoAlbum  += "<div class='lasfotos'>";
            contenidoAlbum  += "<div class='cancion'>";
            contenidoAlbum  += "<h2>" + element.title + "</h2>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='fotos'>";
            contenidoAlbum  += "<div class='dato'>";
            contenidoAlbum  += "<img src='" + element.cover_big + "' alt='' class='secciones margin ftrack' >";
            contenidoAlbum  += "<p class='track'> Portada </p>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='dato'>";
            contenidoAlbum  += "<img src='" + element.cover + "' alt='' class='secciones margin ftrack' >";
            contenidoAlbum  += "<a href='detail.html?artistId=" + artistId +"'> Artista:" + element.artist.name + "</a>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='losdetalles'>";
            contenidoAlbum  += "<div class='fecha'>";
            contenidoAlbum  += "<p> Release date:" + element.release_date +  "</p>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";


       contenedorAlbum.innerHTML = contenidoAlbum;

   })
}



if (cancionPlaylist == null) {
    playlist = [];
} else {
    playlist = JSON.parse(cancionPlaylist);
}

if (playlist.includes(cancionPlaylist)) {
    document.querySelector('.agregar').innerHTML = "Remove from playlist";
}






//noborrar
}
//noborrar
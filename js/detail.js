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

       var contenedorTracks = document.querySelector(".contenedor-todo");
       
       var contenidoTracks = "";
       var playlistCancionId;

        var element = informacionDetailCancion;
           var albumId = element.album.id;
           var artistId = element.artist.id;
           playlistCancionId = element.id;
           
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
           contenidoTracks += "<a href='detail.html?albumId=" + artistId +"'> Artist:" + element.artist.name + "</a>";
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

        var playlist = [];
        var agregar = document.querySelector('.agregar');

        var cancionPlaylist = window.localStorage.getItem("playlist");
        // window.localStorage.setItem('playlistCancionId', cancionPlaylist);



        if (cancionPlaylist == null) {
            playlist = [];
        } else {
            playlist = JSON.parse(cancionPlaylist);
        }
        
        if (playlist.includes(playlistCancionId)) {
            document.querySelector('.agregar').innerHTML = "Remove from playlist";
        }

        agregar.addEventListener('click', function(agregarTrack){
            agregarTrack.preventDefault();
    
        if (playlist.includes(playlistCancionId)) {
            var array = playlist.indexOf(playlistCancionId);
            playlist.splice(array,1);
        } else{
            playlist.push(playlistCancionId);
        }

        

        console.log(playlist);

        window.localStorage.setItem('playlist', JSON.stringify(playlist));

        console.log(playlist);

})


   })

}







//array de ids canciones en stoarge session 
//AGREGAR O ELEMINIAR UNA CANCION
//GET ITEM 
//PARSE
//VERIFICAR SI EL ELEMENTO YA ESTA
//ELIMINAR O AGREGAR
//ARRARY PUSH
//VOLVES A GUARDAR EL ARRAY CON SETIME


// no borrar
}
// no borrar

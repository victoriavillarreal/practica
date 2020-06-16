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

else {
    var detailArtistId = queryStringObj.get("artistId");
    traemeArtist(detailArtistId);
};

if(queryStringObj.has("generoId")){
    var detailGeneroId = queryStringObj.get("generoId");
    traemeGenero(detailGeneroId);
};

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
            contenidoTracks += "<div class='uk-child-width-1-2@m uk-grid-match' uk-grid>"
           contenidoTracks += "<div class='body bodytrack uk-card uk-card-default uk-card-body' uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>";
           contenidoTracks += "<div class='lasfotos'>";
           contenidoTracks += "<div class='cancion'>";
           contenidoTracks += "<h2>" + element.title + "</h2>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='fotos'>";
           contenidoTracks += "<div class='dato uk-animation-toggle'>";
           contenidoTracks += "<img src='" + element.artist.picture_medium + "' alt='' class='secciones margin ftrack ' >";
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
            contenidoAlbum += "<div class='uk-child-width-1-2@m uk-grid-match' uk-grid>"
            contenidoAlbum  += "<div class='body bodytrack uk-card uk-card-default uk-card-body' uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>";
            contenidoAlbum  += "<div class='lasfotos'>";
            contenidoAlbum  += "<div class='cancion'>";
            contenidoAlbum  += "<h2>" + element.title + "</h2>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='fotos'>";
            contenidoAlbum  += "<div class='dato datoalbum'>";
            contenidoAlbum  += "<img src='" + element.cover_big + "' alt='' class='secciones margin ftrack' >";
            contenidoAlbum  += "<p class='track'> Portada </p>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='dato datoalbum vinc'>";
            contenidoAlbum  += "<img src='" + element.artist.picture_big + "' alt='' class='secciones margin ftrack' >";
            contenidoAlbum  += "<a href='detail.html?artistId=" + artistId +"'> Artista:" + element.artist.name + "</a>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "<div class='losdetalles albumdetalle'>";
            contenidoAlbum  += "<div class='fecha'>";
            contenidoAlbum  += "<p class='hola'> Release date:" + element.release_date +  "</p>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";
            contenidoAlbum  += "</div>";



       contenedorAlbum.innerHTML = contenidoAlbum;

   })
}


function traemeArtist(detailArtistId) {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + detailArtistId)

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionDetailArtist) {
       console.log(informacionDetailArtist);

       var contenedorArtist = document.querySelector(".contenedor-todo");
       
       var contenidoArtist = "";

           var element = informacionDetailArtist;
           
            contenidoArtist += '<div class = "titulos">';
            contenidoArtist  += '<h2> ARTIST </h2>';
            contenidoArtist  += '</div>';
            contenidoArtist += "<div class='uk-child-width-1-2@m uk-grid-match' uk-grid>"
            contenidoArtist += "<div class='body uk-card uk-card-default uk-card-body' uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>";
            contenidoArtist += '<div class="primeracolumn">';
            contenidoArtist += '<div class="artista">';
            contenidoArtist += "<h2>" + element.name + "</h2>";
            contenidoArtist += "</div>";
            contenidoArtist += '<div class="fotos">';
            contenidoArtist  += "<img src='" + element.picture_big + "' alt='' class='secciones foto-artist' >";
            contenidoArtist += "</div>";
            contenidoArtist += '<div class="nombres">';
            contenidoArtist += "<p class='fans'> Fans:" + element.nb_fan +  "</p>";
            contenidoArtist += "</div>";
            contenidoArtist += "</div>";
            contenidoArtist += '<div class="segundacolumn">';
            contenidoArtist += "</div>";
            contenidoArtist += "</div>";
            contenidoArtist += "</div>";


       contenedorArtist.innerHTML = contenidoArtist;

   })


   fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + detailArtistId + "/top")

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionTop) {
       console.log(informacionTop);

       var contenedorTop = document.querySelector(".segundacolumn");
       
       var contenidoTop = "";

       for (let i = 0; i < 5; i++) {
        var element = informacionTop.data[i];
        var cancionId = element.id;

        contenidoTop += "<div class='top5'>";
        contenidoTop +=  "<div class='lascanciones'>";
        contenidoTop += "<div class='top'>";
        contenidoTop += "<div class='imagentop'>";
        contenidoTop += "<img src='" + element.album.cover + "' alt='' class='cancion' >";
        contenidoTop += "</div>";
        contenidoTop += "<div class='datostop'>";
        contenidoTop += "<a href='detail.html?cancionId=" + cancionId +"'class=cancion'>" + element.title + "</a>";
        contenidoTop += "</div>";
        contenidoTop += "</div>";
        contenidoTop += "</div>";

        

    }


       contenedorTop.innerHTML = contenidoTop;

   })

}

function traemeGenero(detailGeneroId){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + detailGeneroId)

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionDetailGenero) {
       console.log(informacionDetailGenero);

       var contenedorGenero = document.querySelector(".contenedor-todo");
       
       var contenidoGenero = "";


           var element = informacionDetailGenero;
           
           
            contenidoGenero += '<div class = "titulos">';
            contenidoGenero += '<h2> GÉNEROS </h2>';
            contenidoGenero  += '</div>';
            contenidoGenero += "<div class='uk-child-width-1-2@m uk-grid-match' uk-grid>"
            contenidoGenero += "<div class='body bodygenero uk-card uk-card-default uk-card-body' uk-scrollspy='cls: uk-animation-slide-left; repeat: true'>";
            contenidoGenero  += "<div class='primeracolumn generos'>";
            contenidoGenero  += "<div class='artista'>";
            contenidoGenero  += "<h2>" + element.name + "</h2>";
            contenidoGenero  += '</div>'
            contenidoGenero  += "<div class='fotos'>";
            contenidoGenero += "<img src='" + element.picture_big + "' alt='' class='secciones' >";
            contenidoGenero  += '</div>';
            contenidoGenero  += '</div>';
            contenidoGenero  += "<div class='segundacolumn seg'>";
            contenidoGenero  += "<div class='top5'>";
            contenidoGenero += '<h2> ARTISTAS </h2>';
            contenidoGenero  += '</div>';
            contenidoGenero  += "<div class='lascanciones'>";
            contenidoGenero  += "<div class='top gentop'>";
            contenidoGenero  += '</div>';
            contenidoGenero  += '</div>';
            contenidoGenero  += '</div>';
            contenidoGenero  += '</div>';
            contenidoGenero  += '</div>';




       contenedorGenero.innerHTML = contenidoGenero;


       

   })

   fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + detailGeneroId + "/artists")

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionGeneroArtist) {
       console.log(informacionGeneroArtist);

       var contenedorGArtist = document.querySelector(".lascanciones");
       
       var contenidoGArtist = "";

       for (let i = 0; i < 10; i++) {
        var element = informacionGeneroArtist.data[i];
        var artistId = element.id;
        
        contenidoGArtist += "<div class='top gentop'>";
        contenidoGArtist += "<div class='imagentop'>";
        contenidoGArtist += "<img src='" + element.picture_big + "' alt='' class='cancion' >";
        contenidoGArtist += "</div>";
        contenidoGArtist += "<div class='datostop'>";
        contenidoGArtist += "<a href='detail.html?artistId=" + artistId +"'class=nombrecancion'>" + element.name + "</a>";
        contenidoGArtist += "</div>";
        contenidoGArtist += "</div>";
        

    }


       contenedorGArtist.innerHTML = contenidoGArtist;

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

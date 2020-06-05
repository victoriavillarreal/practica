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

else{
    var detailArtistId = queryStringObj.get("artistId");

    traemeArtist(detailArtistId);
};

console.log(detailCancionId);


function traemeCancion(detailCancionId){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + detailCancionId)

   .then (function (respuesta) {
       return respuesta.json();
   })
   .then (function (informacionDetailCancion) {
       console.log(informacionDetailCancion);

       var contenedorTracks = document.querySelector(".containertracks");
       
       var contenidoTracks = "";

       for (let i = 0; i < informacionDetailCancion.length ; i++) {
           var element = informacionDetailCancion[i];
           

           contenidoTracks += "<div class='body bodytrack'>";
           contenidoTracks += "<div class='lasfotos'>";
           contenidoTracks += "<div class='cancion'>";
           contenidoTracks += "<h2>" + element.contributors.title + "</h2>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='fotos'>";
           contenidoTracks += "<div class='dato'>";
           contenidoTracks += "<img src='" + element.contributors.picture_big + "' alt='' class='secciones margin ftrack' >";
           contenidoTracks += "<p class='track'> Portada </p>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='dato'>";
           contenidoTracks += "<img src='" + element.album.picture_big + "' alt='' class='secciones margin ftrack' >";
           contenidoTracks += "<a href='detail.html?albumId=" + albumId +"'> Album:" + element.album.title + "</a>";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";
           contenidoTracks += "<div class='losdetalles'>";
           contenidoTracks += "<div class='fecha'>";
           contenidoTracks += "<p> Release date:" + element.release_date +  "</p>";
           contenidoTracks += "</div>";
           contenidoTracks += "<a href='detail.html?albumId=" + albumId +"'> Album:" + element.album.title + "</a>";
           contenidoTracks += "<a href='playlist.html'><p>Add to playlist</p></a> ";
           contenidoTracks += "</div>";
           contenidoTracks += "</div>";
       }

       contenedorTracks.innerHTML = contenidoTracks;

   })
}


<<<<<<< HEAD
=======
if(queryStringObj.has("cancionId")){
    var detailCancionId = queryStringObj.get("cancionId");
    traemeCancion(detailCancionId);
}

else if(queryStringObj.has("albumId")){
    var detailAlbumId = queryStringObj.get("albumId");

    traemeAlbum(detailAlbumId);
}

else{
    var detailArtistId = queryStringObj.get("artistId");

    traemeArtist(detailArtistId);
};

console.log(detailCancionId);


<<<<<<< HEAD
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + detailCancionId)

    .then (function (respuesta) {
        return respuesta.json();
    })
    .then (function (informacionDetailCancion) {
        console.log(informacionDetailCancion);

        var contenedorTracks = document.querySelector(".containertracks");
        
        var contenidoTracks = "";

        //for (let i = 0; i < informacionDetailCancion.length ; i++) {
            var element = informacionDetailCancion;
            

            contenidoTracks += "<div class='body bodytrack'>";
            contenidoTracks += "<div class='lasfotos'>";
            contenidoTracks += "<div class='cancion'>";
            contenidoTracks += "<h2>" + element.contributors.title + "</h2>";
            contenidoTracks += "</div>";
            contenidoTracks += "<div class='fotos'>";
            contenidoTracks += "<div class='dato'>";
            contenidoTracks += "<img src='" + element.contributors.picture_big + "' alt='' class='secciones margin ftrack' >";
            contenidoTracks += "<p class='track'> Portada </p>";
            contenidoTracks += "</div>";
            contenidoTracks += "<div class='dato'>";
            contenidoTracks += "<img src='" + element.album.picture_big + "' alt='' class='secciones margin ftrack' >";
            contenidoTracks += "<a href='detail.html?albumId=" + albumId +"'> Album:" + element.album.title + "</a>";
            contenidoTracks += "</div>";
            contenidoTracks += "</div>";
            contenidoTracks += "</div>";
            contenidoTracks += "<div class='losdetalles'>";
            contenidoTracks += "<div class='fecha'>";
            contenidoTracks += "<p> Release date:" + element.release_date +  "</p>";
            contenidoTracks += "</div>";
            contenidoTracks += "<a href='detail.html?albumId=" + albumId +"'> Album:" + element.album.title + "</a>";
            contenidoTracks += "<a href='playlist.html'><p>Add to playlist</p></a> ";
            contenidoTracks += "</div>";
            contenidoTracks += "</div>";
        //}

        contenedorTracks.innerHTML = contenidoTracks;

    })
}
=======
>>>>>>> 12aa55bec8d82bf4ae21da384611cf9ac1c8ee18

>>>>>>> 9ed83e98d30fb29d1259fbbd6cf8d43aa8d87fb8
function traemeAlbum(detailAlbumId){
    fetch("jdinwifnffeie/www.laapidedeezer.com/elmetodoqueelegi" + detailAlbumId);

    //aca hago todo
    //hago un fetch a la api de deezer con la url correspondiente 
}

function traemeArtist(detailArtistId){
    fetch("jdinwifnffeie/www.laapidedeezer.com/elmetodoqueelegi" + detailArtistId);

    //aca hago todo
    //hago un fetch a la api de deezer con la url correspondiente 
}





//noborrar
}
//noborrar
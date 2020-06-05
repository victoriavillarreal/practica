window.onload = function(){

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);


if(queryStringObj.has("cancionId")){
    var detailId = queryStringObj.get("cancionId");
    traemeCancion(detailId);
}

else if(queryStringObj.has("albumId")){
    var albumId = queryStringObj.get("albumId");

    traemeAlbum(albumId);
}

else{
    var artistId = queryStringObj.get("artistId");

    traemeArtist(artistId);
};

console.log(detailId);

function traemeCancion(detailId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + detailId);

    //aca hago todo
    //hago un fetch a la api de deezer con la url correspondiente 

}

function traemeAlbum(albumId){
    fetch("jdinwifnffeie/www.laapidedeezer.com/elmetodoqueelegi" + albumId);

    //aca hago todo
    //hago un fetch a la api de deezer con la url correspondiente 
}

function traemeArtist(artistId){
    fetch("jdinwifnffeie/www.laapidedeezer.com/elmetodoqueelegi" + artistId);

    //aca hago todo
    //hago un fetch a la api de deezer con la url correspondiente 
}





//noborrar
}
//noborrar
window.onload = function() {


var searchResults = document.querySelector(".search-results");
var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
        
var cancionId = track[i].title + track[i].artist.picture_big;
queryStringObj.get("cancionId");
    
fetch("https://api.deezer.com/search?q=cancionId")
    .then (function (respuestaBuscador) {
        return respuestaBuscador.json();
    })
    .then (function (informacionBuscador) {
        searchResults += element.
    
        
    })









// no borrar    
}
// no borrar    

window.onload = function() {

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);

var resultadosBuscador = queryStringObj.get("q");

function traemeResultados (event){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + resultadosBuscador)
    
    .then(function(response){
        return response.json();
    })

    .then(function(informacionBuscador){
        console.log(informacionBuscador);

        

    })

    .catch(function(error){
        console.log("El error fue " + error)
    })
}

resultadosBuscador = traemeResultados();



// no borrar    
}
// no borrar    

window.onload = function() {

    var resultadoPlaylist = window.localStorage.getItem('playlist');

    playlist = JSON.parse(resultadoPlaylist);


    console.log(playlist);

    for (let i = 0; i < playlist.length; i++) {
        var element = playlist[i];

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + element)

        .then (function (respuesta) {
            return respuesta.json();
        })
        .then (function (informacionPlaylist) {
            console.log(informacionPlaylist);
            var element = informacionPlaylist;
            var cancionId = element.id;
            var artistId = element.artist.id;
            var playlistCancionId = element.id;

            var contenedorPlaylist = document.querySelector(".secciones");
            var contenidoPlaylist = "";

            contenidoPlaylist +='<div class="container-can">'
            contenidoPlaylist += '<iframe scrolling="no" frameborder="1px" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+cancionId+'&app_id=1" width="700" height="350"></iframe>'
            contenidoPlaylist += "<div class='canciones'>";
            contenidoPlaylist += "<a href='detail.html?cancionId=" + cancionId +"' class='vermas'> VER MÁS </a>";
            contenidoPlaylist += "<button class='agregar'><p>Remove from playlist</p></button> ";
            contenidoPlaylist += "</div>";
            contenidoPlaylist += "</div>";
            


            contenedorPlaylist.innerHTML += contenidoPlaylist;

    
            
            var agregar = document.querySelector('.agregar');
            document.querySelector(".container-can").innerHTML.style.display="block";
    
            agregar.addEventListener('click', function(agregarTrack){
                agregarTrack.preventDefault();
                playlist = JSON.parse(element.id);
        
                if (playlist.includes(element.id)) {
                    document.querySelector(".container-can").innerHTML.style.display="none";
                    var array = playlist.indexOf(element.id);
                    playlist.splice(array,1);
                    window.localStorage.setItem('playlist', JSON.stringify(playlist));
                } 
    
            })

        })
    }


    var botonNombrePlaylist = document.querySelector('#boton-playlist');
    var tituloPlaylist = document.querySelector('.playlist');
    var inputPlaylist = document.querySelector('.nombre-playlist')

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var nombrePlaylist = queryStringObj.get('n'); 
    console.log(nombrePlaylist);

    // botonNombrePlaylist.onclick = function () {
    //     window.localStorage.getItem('nombrePlaylist');
    //     nombreGuardadoPlaylist = JSON.parse(nombrePlaylist);
    //     console.log('nombreGuardadoPlaylist')
    // }
    
    var nombreLocalStorage = window.localStorage.getItem(nombrePlaylist);
    var nombreGuardadoPlaylist = JSON.parse(nombreLocalStorage);

    if (nombreGuardadoPlaylist == null) {
        botonNombrePlaylist.addEventListener('click', guardarNombre);

        function guardarNombre (){
            window.localStorage.setItem('nombreGuardadoPlaylist', JSON.stringify(nombreGuardadoPlaylist));
        } 
    } else {
        tituloPlaylist = nombrePlaylist;
        inputPlaylist.innerHTML = '';
    }





// no borrar
}
// no borrar
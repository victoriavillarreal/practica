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

    
            /*var remove = document.querySelector(".agregar");

            remove.addEventListener('click',function(removePlaylist){
                removePlaylist.preventDefault();

                var cancionPlaylist = window.localStorage.getItem("playlist");
                playlist = JSON.parse(cancionPlaylist);

                if (playlist.includes(cancionId)) {
                    document.querySelector(".container-can").style.display="none";
                    var array = playlist.indexOf(playlistCancionId);
                    playlist.splice(array,1);
                }
                window.localStorage.setItem('playlist', JSON.stringify(playlist));
            })
            */



            var remove = document.querySelector('.agregar');
            

            remove.onclick = function (removePlaylist) {
                removePlaylist.preventDefault();
                var cancionPlaylist = window.localStorage.getItem("playlist");
                playlist = JSON.parse(cancionPlaylist);

                if (playlist.includes(cancionId)) {
                    var array = playlist.indexOf(cancionId);
                    playlist.splice(array,1);
                    document.querySelector(".container-can").style.display="none";
                    window.location.reload(true);
                }
                window.localStorage.setItem('playlist', JSON.stringify(playlist));
            }
            
            
            
            /*
            var remove = document.querySelector('.agregar');
            var agregarList = new Array(remove);

            for (let i = 0; i < agregarList.length; i++) {
                var element =  agregarList[i];
                console.log(element);

                this.onclick = function (removePlaylist) {
                    removePlaylist.preventDefault();
                    var cancionPlaylist = window.localStorage.getItem("playlist");
                    playlist = JSON.parse(cancionPlaylist);

                    if (playlist.includes(cancionId)) {
                        var array = playlist.indexOf(cancionId);
                        playlist.splice(array,1);
                        document.querySelector(".container-can").style.display="none";
                        window.location.reload(true);
                    }
                    window.localStorage.setItem('playlist', JSON.stringify(playlist));
                }
                
            } */
        })
    }

    


    var botonNombrePlaylist = document.querySelector('#boton-playlist');
    var tituloPlaylist = document.querySelector('.playlist');
    var inputPlaylist = document.querySelector('.nombre-playlist');
    
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var nombrePlaylist = queryStringObj.get('n'); 
    console.log(nombrePlaylist);

    window.localStorage.setItem('nombrePlaylist', nombrePlaylist);
    
                

    

    if (nombrePlaylist == null) {
        inputPlaylist;
        botonNombrePlaylist.addEventListener('click', guardarNombre);

            function guardarNombre (){
                var queryString = location.search;
                var queryStringObj = new URLSearchParams(queryString);
                var nombrePlaylist = queryStringObj.get('n'); 
                window.localStorage.setItem('nombrePlaylist', nombrePlaylist);
            } 
        
    } else{
        var nombreLocalStorage = window.localStorage.getItem('nombrePlaylist');
        // var nombreParaUsar = JSON.parse(nombreLocalStorage);

        tituloPlaylist.innerHTML = nombreLocalStorage;
        inputPlaylist.innerHTML = '';
    }




// no borrar
}
// no borrar

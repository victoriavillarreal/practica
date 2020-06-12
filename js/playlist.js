window.onload = function() {

var cancionPlaylist = window.localStorage.getItem("playlistCancionId");

window.localStorage.setItem('playlistCancionId', cancionPlaylist);



console.log('cancionPlaylist');

if (cancionPlaylist == null) {
    playlist = [];
} else {
    playlist = JSON.parse(cancionPlaylist);
}

if (playlist.includes(playlistCancionId)) {
    document.querySelector('.agregar').innerHTML = "Remove from playlist";
}










// no borrar
}
// no borrar
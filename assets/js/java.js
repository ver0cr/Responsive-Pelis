function cargarPeliculas() {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=c41bd0194b74d8255c364fa70f725d1a&language=es`,
    async: 'true',
    success: function (data) { renderPelicula(data) },
  });
}
//peliculas al azar de un género en específico: https://api.themoviedb.org/3/discover/movie?api_key=c41bd0194b74d8255c364fa70f725d1a&with_genres=28&language=es

function renderPelicula(data) {
  for (let i = 0; i < 12; i++) {
    $("#peliculas").append(`<div id= "div-${data.results[i].id}"><h3>${data.results[i].title}</h3><img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"><button id= "movie-${data.results[i].id}"> Descripción</button></div>`);
    $(`#movie-${data.results[i].id}`).click(cargarPelicula(data.results[i].id));
  }
}
function detallesPelicula(data) {
  $(`#div-${data.id}`).append(`<p>${data.overview}</p>`);

}

function cargarPelicula(id) {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=c41bd0194b74d8255c364fa70f725d1a&language=es`,
    async: 'true',
    success: function (data) { detallesPelicula(data) },
  });
}


$(document).ready(function () {
  cargarPeliculas();
})
















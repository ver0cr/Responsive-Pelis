function cargarPeliculas() {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=f9d454a7908f5a64ae231240c823e0e4&language=es`,
    async: 'true',
    success: function(data) {renderPelicula(data)},
  });
}

function renderPelicula(data) {
  $("#peliculas").append(`<div><h3>${data.results[0].title}</h3><img src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}"></div><h3>${data.results[0].overview}</h3>`);
  $("#peliculas").append(`<div><h3>${data.results[1].title}</h3><img src="https://image.tmdb.org/t/p/w500${data.results[1].poster_path}"></div><h3>${data.results[1].overview}</h3>`);
}

$(document).ready(function () {
  cargarPeliculas();
})
















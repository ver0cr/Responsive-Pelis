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
  // function(){cargarPelicula(data.results[i].id)}
  
  function renderPelicula(data) {
    $("#peliculas").empty();
    for (let i = 0; i < data.results.length; i++) {
      $("#peliculas").append(`<div id="div-${data.results[i].id}"><h3>${data.results[i].title}</h3><img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"><button id="movie-${data.results[i].id}" class="btn-descripcion">Descripción</button></div>`);
      $(`#movie-${data.results[i].id}`).click(function () { cargarPelicula(data.results[i].id) });
    }
  }
  function detallesPelicula(data) {
    $(`#detalles-${data.id}`).remove();
    $(`#div-${data.id}`).append(`<p id="detalles-${data.id}">${data.overview}</p>`);
  
  }
  
  function cargarPelicula(id) {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: `https://api.themoviedb.org/3/discover/movie/${id}?api_key=c41bd0194b74d8255c364fa70f725d1a&with_genres=18&language=es`,
      async: 'true',
      success: function (data) { detallesPelicula(data) },
    });
  }
  
  function buscarPelicula(texto) {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=c41bd0194b74d8255c364fa70f725d1a&with_genres=18&language=es=${texto}`,
      async: 'true',
      success: function (data) { console.log(data); renderPelicula(data) },
      error: function (data) {console.log("ERROR 404")}
    });
  }
  
  $(document).ready(function () {
    cargarPeliculas();
    $("#btn-busqueda").click(function () {
      let texto = $("#texto-busqueda").val();
      buscarPelicula(texto);
    });
  })
  
  
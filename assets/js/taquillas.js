function cargarPeliculas() {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=c41bd0194b74d8255c364fa70f725d1a&language=en-es&page=1`,
      async: 'true',
      success: function (data) { renderPelicula(data) },
    });
  }
  //peliculas al azar de un género en específico: https://api.themoviedb.org/3/discover/movie?api_key=c41bd0194b74d8255c364fa70f725d1a&with_genres=28&language=es
  // function(){cargarPelicula(data.results[i].id)}

  //https://api.themoviedb.org/3/movie/top_rated?api_key=c41bd0194b74d8255c364fa70f725d1a&language=en-US&page=1
  
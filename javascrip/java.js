document.addEventListener("DOMContentLoaded", function () {

  window.filtrar = function (genero) {

    const peliculas = document.querySelectorAll(".flip-box");

    peliculas.forEach(pelicula => {

      const categoria = pelicula.querySelector(".pelicula");

      if (genero === "todas" || categoria.classList.contains(genero)) {
        pelicula.style.display = "block";
      } else {
        pelicula.style.display = "none";
      }

    });
  }

});
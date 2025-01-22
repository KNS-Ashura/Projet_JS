import { getIdUrl } from './hide_key.js';

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('Movie_id');
const url = getIdUrl(movieId);

  
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        $("#movie-title").text(data.title);
        $("#movie-poster").attr({
          src: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          alt: data.title
        });
        $("#movie-summary").text(data.overview);
        $("#movie-genre").text(`Genre : ${data.genres.map((g) => g.name).join(", ")}`);

        fetch(url)
          .then((response) => response.json())
          .then((castData) => {
            if (castData && castData.cast && castData.cast.length > 0) {
              let actors = castData.cast.slice(0, 5).map((actor) => actor.name);
              $("#movie-actors").text(`Acteurs : ${actors.join(" ")}`);
            } else {
              $("#movie-actors").text("Acteurs : Aucune information disponible");
            }
          });

        $("#movie-ratings").text(`Notes : ${data.vote_average}`);
        $("#movie-dvd-release").text(`Date de sortie en DVD : ${data.release_date}`);
      } else {
        console.error("Données du film introuvables.");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
    });
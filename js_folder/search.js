import { generateMovieUrl } from './hide_key.js';

export function fetchMovies(title) {
  const url = generateMovieUrl(title);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const halfLength = Math.ceil(data.results.length / 2); // Calculer la moitié
        const firstHalf = data.results.slice(0, halfLength); // Première moitié

        $("#main-container").empty(); 
        $("#second-container").empty();

        firstHalf.forEach((movie) => {
          const newDiv = $("<div>", {
            class: "Poster_section",
          });

          const newPoster = $("<img>", {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            class: "Poster",
            "data-id": movie.id
          });

          const newTitle = $("<a>", {
            class: "Title",
            href: `./page_html/Movie.html?Movie_id=${movie.id}`,
          }).text(movie.title);

          newDiv.append(newPoster);
          newDiv.append(newTitle);

          $("#main-container").append(newDiv);
        });
      } else {
        console.error("Aucun résultat trouvé.");
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
}

export function fetchMovies2(title) {
  const url = generateMovieUrl(title);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const halfLength = Math.ceil(data.results.length / 2);
        const secondHalf = data.results.slice(halfLength);

        secondHalf.forEach((movie) => {
          const newDiv = $("<div>", {
            class: "Poster_section",
          });

          const newPoster = $("<img>", {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            class: "Poster",
            "data-id": movie.id
          });

          const newTitle = $("<a>", {
            class: "Title",
            href: `./page_html/Movie.html?Movie_id=${movie.id}`,
          }).text(movie.title);

          newDiv.append(newPoster);
          newDiv.append(newTitle);

          $("#main-container").append(newDiv);
          $("#see_more").remove();

        });
      } else {
        console.error("Aucun résultat trouvé.");
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
}
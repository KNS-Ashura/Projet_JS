import { generateMovieUrl } from './hide_key.js';

function fetchMovies(title) {
  const url = generateMovieUrl(title);
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        $("#main-container").empty();

        data.results.forEach((movie) => {
          const newDiv = $("<div>", {
            class: "Poster_section",
          });

          const newPoster = $("<img>", {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            class: "Poster",
          });

          const newTitle = $("<a>", {
            class: "Title",
            href: `./page_html/Movie.html?movie_id=${movie.id}`, // Ajouter l'ID du film dans l'URL
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

fetchMovies("Avengers");

searchInput.addEventListener("input", (event) => {
  const title = event.target.value;

  if (title.trim() === "") {
    fetchMovies("Avengers");
  } else {
    fetchMovies(title);
  }
});
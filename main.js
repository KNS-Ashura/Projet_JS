
searchInput.addEventListener("input", (event) => {

  const title = event.target.value;
  
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=fe05fa529a04b25c74b7594d3251d327&query=${encodeURIComponent(title)}`)
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
          href: "./page_html/Movie.html",
        })
          .text(movie.title);

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
});
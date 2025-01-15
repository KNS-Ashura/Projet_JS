

const url = "http://www.omdbapi.com/?apikey=5c8a1596&s=batman&page=1";

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.Response === "True") {
      data.Search.forEach(movie => {

        const newDiv = $('<div>', {
          class: "Poster_section"
        }).css({
          border: "solid black 5px",
          marginRight: "1.5em",
          marginLeft: "1.5em",
          marginTop: "1em",
          marginBottom: "1em",
          padding: "0%",
          borderRadius: "10px",
          overflow: "hidden"
        });

        const newPoster = $('<img>', {
          src: movie.Poster,
          alt: movie.Title,
          class: 'Poster'
        }).css({
          width: "20em",
          height: "25em",
        });

        newDiv.append(newPoster);
        $('#main-container').append(newDiv);
      });

    } else {
      console.error('Erreur dans les données:', data.Error);
    }
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
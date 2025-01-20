
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('Movie_id');

function fetchMovieDetails(movieId) {
    const apiKey = 'votre_clé_api'; // Remplacez par votre clé API TMDb
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          // Afficher les informations du film dans la page
          document.getElementById('movie-title').textContent = data.title;
          document.getElementById('movie-description').textContent = data.overview;
          
          // Afficher le poster du film
          const posterUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
          document.getElementById('movie-poster').src = posterUrl;
          
          // Vous pouvez aussi afficher d'autres informations comme la date de sortie, etc.
        }
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }
  
  // Appeler la fonction avec l'ID extrait de l'URL
  fetchMovieDetails(movieId);

  console.log("coucou")
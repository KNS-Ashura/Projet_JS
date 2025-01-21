import { getIdUrl } from './hide_key.js';

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('Movie_id');

function fetchMovieDetails(movieId) {

    const url = getIdUrl(movieId);

  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log(data);
        }
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }
  
  // Appeler la fonction avec l'ID extrait de l'URL
  fetchMovieDetails(movieId);

  console.log("coucou")
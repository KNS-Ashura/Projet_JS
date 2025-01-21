import { fetchMovies } from './js_folder/search.js';
import { fetchMovies2 } from './js_folder/search.js';

let title = ""; // Déclare une variable globale pour stocker le titre

fetchMovies("Avengers");

searchInput.addEventListener("input", (event) => {
  title = event.target.value; // Met à jour la variable globale

  if (title.trim() === "") {
    fetchMovies("Avengers");
  } else {
    fetchMovies(title);
  }
});

const seeMorebtn = document.getElementById('see_more');

seeMorebtn.addEventListener('click', () => {
  fetchMovies2(title); // Utilise la variable globale
});
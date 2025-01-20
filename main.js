import { fetchMovies } from './js_folder/search.js';

fetchMovies("Avengers");

searchInput.addEventListener("input", (event) => {
  const title = event.target.value;

  if (title.trim() === "") {
    fetchMovies("Avengers");
  } else {
    fetchMovies(title);
  }
});

const movieItems = document.querySelectorAll('.movie-item');

movieItems.forEach(item => {
  item.addEventListener('click', function() {
    
    const movieId = this.getAttribute('data-id');
    
    console.log('ID du film cliqué :', movieId);

    window.location.href = `./page_html/Movie.html?movie_id=${movieId}`;
  });
});
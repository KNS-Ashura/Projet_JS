import { fetchMovies } from './js_folder/search.js';
import { fetchMovies2 } from './js_folder/search.js';
import { addBtn } from './js_folder/search.js';

let title = "";

fetchMovies("the");

searchInput.addEventListener("input", (event) => {
  title = event.target.value;
  if (title.trim() === "") {
    fetchMovies("Avengers");
  } else {
    fetchMovies(title);
  }
  addBtn();
});

$("main").on("click", "#see_more", (event) => {
  if (title.trim() === "") {
    title = "Avengers";
  }
  fetchMovies2(title);
});

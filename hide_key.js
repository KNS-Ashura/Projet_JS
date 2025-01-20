export function generateMovieUrl(title) {
    const apiKey = 'fe05fa529a04b25c74b7594d3251d327';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
    return url;
}
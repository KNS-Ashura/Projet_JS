# Projet_JS
Projet de javascript sur un site cinema.

pour lancer le projet il faut creer un fichier avec ce nom exacte : hide_key.js 

qui se trouve dans ce dossier : C:\Supinfo\1JS\Projet_JS\js_folder\hide_key.js

Ensuite copier ce code pour le mettre dedans avec votre clef api 


export function generateMovieUrl(title) {
    const apiKey = '***';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}&page=1`;
    return url;
}

export function getIdUrl(id) {
    const apiKey = '***';
    const urlid = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    return urlid;
}

remplacer les *** par votre clef api.

Puis lancer la projet avec live server depuis la pge index.html.
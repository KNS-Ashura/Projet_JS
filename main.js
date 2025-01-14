

const url = "http://img.omdbapi.com/?apikey=5c8a1596&";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Données reçues :", data);

    // Exemple : Ajouter une image à la page
    const imgElement = document.createElement('img');
    imgElement.src = data.Poster;
    document.body.appendChild(imgElement);
  })
  .catch(error => {
    console.error("Erreur lors du fetch :", error.message);
  });
const API_KEY = 'YOUR_TMDB_API_KEY'; // Remplace par ta clé TMDb
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchMovies() {
    const response = await fetch(API_URL);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    const movieGrid = document.getElementById('movies');
    movieGrid.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>⭐ ${movie.vote_average}</p>
    `;
        movieGrid.appendChild(card);
    });
}

fetchMovies();

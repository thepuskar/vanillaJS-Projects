const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSerchList = document.querySelector("#movieSerchList");

const API_KEY = "f9cde82c44c9ed80078efb7e0e8e1bc9";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function movieImg(movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `
        <div class="img"> 
        <img src=${IMG_URL + movie.poster_path} data-movie-id=${movie.id} />
        </div>`;
    }
  });
}

function createMovieContainer(movies) {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie-container");
  const movieTemplate = `
        <div>
            <div class="movie_card">
                ${movieImg(movies)}
            </div>
        </div>
  `;

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}

function renderSearchMovies(data) {
  movieSerchList.innerHTML = "";
  const movies = data.results;
  const movieBlock = createMovieContainer(movies);
  movieSerchList.appendChild(movieBlock);
  console.log("data = ", data);
}

buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_KEY +
    "&query=" +
    value;

  fetch(url)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) => {
      console.log("Error");
    });

  inputElement.value = "";
};

const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSerchList = document.querySelector("#movieSerchList");

const API_KEY = "f9cde82c44c9ed80078efb7e0e8e1bc9";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=${API_KEY}`;
  return url;
}

function movieImg(movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `
        <img src=${IMG_URL + movie.poster_path} data-movie-id=${movie.id} />
        `;
    }
  });
}

function createMovieContainer(movies) {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie-container");
  const movieTemplate = `
            <div class="movie_card">
                ${movieImg(movies)}
            </div>
            <div class="content">
              <button id="content-close">X</button>
            </div>
  `;

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}

function createIframe(video) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video.key}`;
  iframe.width = 360;
  iframe.height = 315;
  iframe.allowFullscreen = true;
  return iframe;
}

function renderSearchMovies(data) {
  movieSerchList.innerHTML = "";
  const movies = data.results;
  const movieBlock = createMovieContainer(movies);
  movieSerchList.appendChild(movieBlock);
}

function createVideoTemplete(data, content) {
  content.innerHTML = `<button id="content-close">X</button>`;
  console.log("videe", data);
  const videos = data.results;
  const lenght = videos.lenght > 4 ? 4 : videos.lenght;
  const iframeContainer = document.createElement("div");
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const iframe = createIframe(video);
    iframeContainer.appendChild(iframe);
    content.appendChild(iframeContainer);
  }
}

buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  const path = "/search/movie/";
  const url = generateUrl(path) + "&query=" + value;
  fetch(url)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) => {
      console.log("Error");
    });

  inputElement.value = "";
};

//event delegation

document.onclick = function (event) {
  const target = event.target;

  if (target.tagName.toLowerCase() === "img") {
    const movieId = target.dataset.movieId;
    console.log(movieId);
    const section = event.target.parentElement;
    const content = section.nextElementSibling;
    content.classList.add("content-display");

    //fetching the video
    const path = `/movie/${movieId}/videos`;
    const url = generateUrl(path);
    fetch(url)
      .then((res) => res.json())
      .then((data) => createVideoTemplete(data, content))
      .catch((error) => {
        console.log(Error);
      });
  }

  if (target.id === "content-close") {
    const content = target.parentElement;
    content.classList.remove("content-display");
  }
};

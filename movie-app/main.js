const API_KEY = "f9cde82c44c9ed80078efb7e0e8e1bc9";

const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");

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
    .then((data) => {
      console.log("data = ", data);
    })
    .catch((error) => {
      console.log("Error");
    });
};

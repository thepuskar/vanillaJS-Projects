const list = [
  {
    id: 1,
    title: "Background Color Picker",
    img: "./img/01.png",
    text: "Here, we can change the Background color and see that color code",
    href: "backgroundColorPicker",
    alt: "background color picker",
  },
  {
    id: 2,
    title: "Counter",
    img: "./img/02.png",
    text: "In this project, we can Increase, decrease and reset the numbers.",
    href: "simpleCounter",
    alt: "counter",
  },
  {
    id: 3,
    title: "Reviews",
    img: "./img/03.png",
    text:
      "Here we can see the different client reviews and even see the radom one.",
    href: "review",
    alt: "reviews",
  },
  {
    id: 4,
    title: "Menu",
    img: "./img/04.png",
    text:
      "In this project, we can see different menu items and choose that item according to the category.",
    href: "menu",
    alt: "menu",
  },
  {
    id: 5,
    title: "Weather App",
    img: "./img/05.png",
    text:
      "Weather app in Vanilla Javascript, CSS, and HTML. I use the Open Weather Map API to make calls to a restful API to return the current weather data.",
    href: "weather-app",
    alt: "weather app",
  },
  {
    id: 6,
    title: "Tetris Game",
    img: "./img/06.jpg",
    text:
      "This is a simple no nonsense version of Tetris game made up of different JavaScript functions and basic html/css",
    href: "tetrisgame",
    alt: "tetrisgame",
  },
];

const container = document.getElementById("main");

list.forEach((result) => {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
<div class="card" style="width: 18rem;" id="card">
<img src=${result.img} class="card-img-top" alt=${result.alt} />
<div class="card-body">
<h5 class="card-title">${result.title}</h5>
<p class="card-text">
  ${result.text}
</p>
<a
  href=${result.href}
  class="btn btn-primary"
  >Click to view</a
>
</div>
</div>

`;

  container.innerHTML += content;
});

//navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//footer
var date = document.getElementById("date");
var d = new Date();
var n = d.getFullYear();
date.innerHTML = n;

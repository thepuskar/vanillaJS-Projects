const list = [
  {
    id: 1,
    title: "Background Color Picker",
    img: "./img/projects/01.png",
    text: "Here, we can change the Background color and see that color code",
    href: "backgroundColorPicker",
    alt: "background color picker",
    target: "_blank",
  },
  {
    id: 2,
    title: "Counter",
    img: "./img/projects/02.png",
    text: "In this project, we can Increase, decrease and reset the numbers.",
    href: "simpleCounter",
    alt: "counter",
    target: "_blank",
  },
  {
    id: 3,
    title: "Reviews",
    img: "./img/projects/03.png",
    text:
      "Here we can see the different client reviews and even see the radom one.",
    href: "review",
    alt: "reviews",
    target: "_blank",
  },
  {
    id: 4,
    title: "Menu",
    img: "./img/projects/04.png",
    text:
      "In this project, we can see different menu items and choose that item according to the category.",
    href: "menu",
    alt: "menu",
    target: "_blank",
  },
  {
    id: 5,
    title: "Weather App",
    img: "./img/projects/05.png",
    text:
      "Weather app in Vanilla Javascript, CSS, and HTML. I use the Open Weather Map API to make calls to a restful API to return the current weather data.",
    href: "weather-app",
    alt: "weather app",
    target: "_blank",
  },
  {
    id: 6,
    title: "Tetris Game",
    img: "./img/projects/06.jpg",
    text:
      "This is a simple no nonsense version of Tetris game made up of different JavaScript functions and basic html/css",
    href: "tetrisgame",
    alt: "tetrisgame",
    target: "_blank",
  },
  {
    id: 7,
    title: "Calendar",
    img: "./img/projects/07.png",
    text:
      "A simple, lightweight, vanilla JavaScript calendar that allows you to filter dates, set events in a particular date, enable/disable past dates, and much more.",
    href: "calendar",
    alt: "calendar",
    target: "_blank",
  },
  {
    id: 8,
    title: "Quize App",
    img: "./img/projects/08.png",
    text:
      "This application will be able to load questions from a 3rd party API, track and display high scores, save high scores in Local Storage and so much more",
    href: "quize",
    alt: "quize-app",
    target: "_blank",
  },
];

const container = document.getElementById("item");

list.forEach((result) => {
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
<div class="p-4 md:w-1/3 sm:mb-0 mb-6" id=${result.id}>
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt=${result.alt}
                class="object-cover object-center h-full w-full"
                src=${result.img}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              ${result.title}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              ${result.text}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-3" href=${result.href} target=${result.target}
              >View Demo
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

`;

  container.innerHTML += content;
});

//footer
var date = document.getElementById("date");
var d = new Date();
var n = d.getFullYear();
date.innerHTML = n;

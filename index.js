const list = [
  {
    id: 1,
    title: "Background Color Picker",
    img: "./img/01.png",
    text: "Here, we can change the Background color and see that color code",
    href: "01-backgroundColor/index.html",
    alt: "background color picker",
  },
  {
    id: 2,
    title: "Counter",
    img: "./img/02.png",
    text: "In this project, we can Increase, decrease and reset the numbers.",
    href: "02-simpleCounter/index.html",
    alt: "counter",
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

const container = document.getElementById("item");

fetch("../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((result) => {
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
        <h2 class="project-title text-xl font-medium title-font text-gray-900 mt-5">
          ${result.title}
        </h2>
        <p class="text-base leading-relaxed mt-2">
          ${result.text}
        </p>
        <a class="text-indigo-500 inline-flex items-center mt-3" 
           href=${result.href} 
           target=${result.target}
          >
          View Demo
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
  })
  .catch((err) => console.error(err));

//footer;
var date = document.getElementById("date");
var d = new Date();
var n = d.getFullYear();
date.innerHTML = n;

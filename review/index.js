const reviews = [
  {
    id: 1,
    name: "Puskar Adhikari",
    job: "Frot-End Developer",
    img:
      "https://devpuskar.netlify.app/static/61bc51a3d2b379d5d27d0493603ad9f6/26447/me.webp",
    text:
      "Monk tech did a great job developing our website. Whether providing direct development support or giving us the opportunity to make our development updates, Monk Tech expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. We look forward to engaging with Toinette again, especially as we look to build out our site services.",
  },
  {
    id: 2,
    name: "Weller R. Thomas",
    job: "CEO",
    img: "https://webtoolfeed.files.wordpress.com/2011/12/1.jpg",
    text:
      "I have been fortunate to use the services of Premier Web Design Solutions for the past four years. In this ever changing world of technology, Premier Web Design Solutions has provided quality and timely service to my company. Premier has not only provided great service but provided consultation on best practices for my media company.  Pathfinders uses Premier to maintain our website, advertisement banners and update video content and digitizing our print publication.",
  },
  {
    id: 3,
    name: "Kimberly Morgan",
    job: "UI/UX Designer",
    img:
      "https://lh3.googleusercontent.com/proxy/HfjWkTJkmMxQ8mtH3EzPpwUdxCzIGUugvI9xW2ZTHbPfIFXk9IZS_eaHr5kS3el7QkKjAtLoh3jast1hj4pMiXXozfEkcTbFfLLpwaSEWZp5GWkl4VUB_ozS0hT3mlg",
    text:
      "I can’t say enough about how knowledgeable Toinette Rorie is in the area of Web Development. She indeed is a developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning. She listens to her clients and delivers an outstanding product in a timely fashion that surpasses your initial desires. My company website, doallthingswithjoy.com, was wholly designed and developed by her, and I couldn’t be happier with its design and function.",
  },
  {
    id: 4,
    name: "Ishika Allen",
    job: "Node JS Developer",
    img:
      "https://dz9yg0snnohlc.cloudfront.net/regain/cro-what-are-the-advantages-of-client-centered-therapy-4.jpg",
    text:
      "I just wanted to thank you for the excellent job you have done on our website. I am very pleased with the final product. I had the opportunity to work with a large national website design company, but I’m so glad I selected Premier Web Design Solutions instead. You made it a pleasure to work with you from the initial conversation of the concept of my website, through content development and page layout to the final roll out of the site. The part I enjoyed best was your professionalism and your ability to get things turned around in a timely fashion. I have been pleased to continue to use your services to monitor and tweak my website to make it indeed a valuable asset for my business.",
  },
  {
    id: 5,
    name: "Shelton Russel",
    job: "Full Stack Developer",
    img:
      "https://i.insider.com/548b2331eab8ea2f3127d6fc?width=1100&format=jpeg&auto=webp",
    text:
      "Premier Web Design Solutions, LLC has been a valuable web development asset to the NCDOT-BOWD. They are extremely professional to work with, and their work displays their creative abilities and great attention to detail. They have exceeded my expectations when comes to their timely completion and delivery of web projects. I highly recommend Premier Web Design Solutions as a company for your web solutions and would be happy to work with them on future web project needs.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});

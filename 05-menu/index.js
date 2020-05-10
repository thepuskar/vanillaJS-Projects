const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:
      "https://simply-delicious-food.com/wp-content/uploads/2019/07/Buttermilk-pancakes-4.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img:
      "https://lh3.googleusercontent.com/proxy/I-bEfHIAbi37erlrjgsZ_zfqfCBKeo0NgMLWZ6GPLSiZiZ5Nhp1JeAdgXSf7GdrzbCXOByhSyeRhKavRopCL3P0BuUikn64qkGk1hs5Y45ecSyYalC0QVxn_mLJmqUdy7IUYJx7QjU_XE_Re89rB8jFhmtgpNMOWWehfPyJWWe9Ncg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://www.lipstiq.com/wp-content/uploads/2017/07/milo3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://www.ahstatic.com/photos/a1l2_rsr001_00_p_1024x768.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img:
      "https://timesofindia.indiatimes.com/thumb/msid-70223814,width-1200,height-900,resizemode-4/.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img:
      "https://images.eatthismuch.com/site_media/img/971403_tabitharwheeler_21276d22-69c2-49ec-9abd-6ae2bf363895.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img:
      "https://web.aw.ca/i/items/?i=classic-bacon-eggs&d=classic-bacon-eggs&cat=breakfast&lang=classic-bacon-eggs-en",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img:
      "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/recipes/healthy-eating-for-lower-cholesterol/classic-american-burger-137819186-1280.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img:
      "https://cdn.vox-cdn.com/thumbor/b6GzlDBxS09CfyLspwwtHW_mW1U=/0x0:5545x3697/1200x800/filters:focal(1734x1384:2620x2270)/cdn.vox-cdn.com/uploads/chorus_image/image/66615155/GettyImages_1214958468.0.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtn;
  const filtersBtn = document.querySelectorAll(".filter-btn");

  filtersBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

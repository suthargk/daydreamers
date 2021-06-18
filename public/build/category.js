import {
  stickyFunc,
  stickyNav,
  stickyMob,
  ticketBtn,
  logo,
} from "./navigation.js";
const sectionCategory = document.querySelector(".section--category");
const categoryLeft = document.querySelector(".catergory-left");
const categoryRight = document.querySelector(".catergory-right");
const categories = document.querySelector(".categories");
const lightgalleryContainer = document.getElementById("lightgallery");
const categoryContainer = document.getElementById("category-container");
const eventFilter = document.querySelector(".event-filter");

// console.log(sectionCategory, stickyMob, stickyNav, ticketBtn);

stickyFunc(stickyNav, sectionCategory, ticketBtn);
stickyFunc(stickyMob, sectionCategory);

if (categories.scrollLeft === 0) categoryLeft.classList.add("text-gray-400");

const scrollLeft = function () {
  if (categories.scrollLeft === 0) {
    categoryLeft.classList.add("text-gray-400");
    categoryLeft.classList.remove("text-gray-800");
  }
  categoryRight.classList.add("text-gray-800");
  categoryRight.classList.remove("text-gray-400");
};

const scrollRight = function () {
  const calcScroll = Math.trunc(
    categories.scrollWidth - categories.getBoundingClientRect().width
  );
  if (
    calcScroll === categories.scrollLeft ||
    calcScroll === categories.scrollLeft + 1
  ) {
    categoryRight.classList.add("text-gray-400");
    categoryRight.classList.remove("text-gray-800");
  }
  categoryLeft.classList.add("text-gray-800");
  categoryLeft.classList.remove("text-gray-400");
};

categories.addEventListener("scroll", function () {
  scrollLeft();
  scrollRight();
});

categoryLeft.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(categories.scrollLeft);
  scrollLeft();
  categories.scrollLeft -= 200;
});

categoryRight.addEventListener("click", function (e) {
  e.preventDefault();
  scrollRight();
  categories.scrollLeft += 200;
});

const eventCategory = {
  marriage: {
    imgSrc: "marriage.png",
    lists: [
      { imgSrc: "picture11.jpeg", event: "2021_utsavs", createdAt: new Date() },
      {
        imgSrc: "picture12.jpeg",
        event: "2022_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture15.jpeg",
        event: "2022_wedding",
        createdAt: new Date(),
      },
    ],
  },
  singing: {
    imgSrc: "singing.png",
    lists: [
      {
        imgSrc: "picture13.jpeg",
        event: "2021_singing",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture14.jpeg",
        event: "2022_singing",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture16.jpeg",
        event: "2022_singing",
        createdAt: new Date(),
      },
    ],
  },
};

const lightboxGalleryConfig = function () {
  lightGallery(lightgalleryContainer, {
    plugins: [lgThumbnail],
    speed: 500,
    backgroundColor: "#000",
  });
};

const eventCategoryKeys = Object.keys(eventCategory);

const renderEventCategories = function () {
  let markup = "";

  eventCategoryKeys.forEach(
    (category, index) =>
      (markup += `<a href="#" data-category="${category}"
      data-selected="${index === 0 ? true : false}"
      class="filter drop-shadow relative overflow-hidden category-item flex flex-col items-center justify-center 
      flex-grow-0 flex-shrink-0 overflow-hidden transition-all duration-300 transform rounded-lg shadow-lg w-36 
      h-36 hover:scale-105 lg:w-52 lg:h-52 bg-gray-50 dark:bg-gray-300">
      
      </div><img src="/public/img/${eventCategory[category].imgSrc}"
          class="object-cover object-center h-20 lg:py-2 lg:h-36"
          draggable="false" alt="">
      <h4><span
              class="block font-semibold tracking-wide text-center text-gray-800 capitalize lg:font-bold">${category}</span>
          <span
              class="block text-xs text-center text-gray-600 lg:text-sm">${
                eventCategory[category].lists.length
              }
              photos</span>
      </h4>
  </a>`)
  );
  categoryContainer.innerHTML = markup;
};

const renderEventCategoriesImages = function (
  selectedEventfilter = eventCategory[eventCategoryKeys[0]].lists
) {
  lightgalleryContainer.innerHTML = selectedEventfilter.reduce((acc, img) => {
    return (
      acc +
      `<div data-src="/public/img/${img.imgSrc}" class="relative overflow-hidden rounded-md aspect-box">
   <a class="absolute top-0 left-0 block h-full zoom">
     <img src="/public/img/${img.imgSrc}" class="
           block
           object-cover object-center
           w-full
           h-full
           transition-all
           duration-300
         " alt="" />
   </a>
  </div>`
    );
  }, "");

  // invoked lightbox gallery function
  lightboxGalleryConfig();
};

const setCategory = function (categoryName = eventCategoryKeys[0]) {
  const events = [
    ...new Set(eventCategory[categoryName].lists.map((ev) => ev.event)),
  ];
  let markup = "";
  events.forEach((event, index) => {
    markup += `<a
  href="#"
  data-selected="${index === 0 ? true : false}"
  data-event=${event}
  class="
  event-filter--item
    inline-block
    px-3
    py-1.5
    border border-gray-200
    rounded-3xl
    hover:bg-gray-50
    dark:hover:text-gray-800
  "
  >${event.replace("_", " ")}</a
>`;
  });
  eventFilter.innerHTML = markup;
};

let categoryItemSelected;
// let lastCategoryELementSelected;

categoryContainer.addEventListener("click", function (e) {
  e.preventDefault();

  categoryItemSelected = e.target.closest(".category-item");
  if (!categoryItemSelected) return;

  allCategoryItems.forEach((item) => (item.dataset.selected = false));
  categoryItemSelected.dataset.selected = true;

  setCategory(categoryItemSelected.dataset.category); // event catergory
  renderEventCategoriesImages(
    eventCategory[categoryItemSelected.dataset.category].lists
  );
});

eventFilter.addEventListener("click", function (e) {
  e.preventDefault();
  const eventFilterItems = e.target.closest(".event-filter--item");
  alleventFilterItems = eventFilter.querySelectorAll(".event-filter--item");
  if (eventFilterItems) {
    alleventFilterItems.forEach((item) => (item.dataset.selected = false));
    eventFilterItems.dataset.selected = true;
    renderEventCategoriesImages(
      eventCategory[
        categoryItemSelected?.dataset.category ?? eventCategoryKeys[0]
      ].lists.filter((list) => eventFilterItems.dataset.event === list.event)
    );
  }
});

let allCategoryItems;
let alleventFilterItems;
const init = function () {
  renderEventCategories();
  setCategory();
  renderEventCategoriesImages();
  allCategoryItems = categoryContainer.querySelectorAll(".category-item");
  alleventFilterItems = eventFilter.querySelectorAll(".event-filter--item");
};
init();

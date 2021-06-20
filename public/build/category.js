import {
  logo,
  stickyFunc,
  stickyNav,
  stickyMob,
  ticketBtn,
} from "./navigation.js";
const sectionCategory = document.querySelector(".ffff");
const categoryLeft = document.querySelector(".catergory-left");
const categoryRight = document.querySelector(".catergory-right");
const categories = document.querySelector(".categories");
const lightgalleryContainer = document.getElementById("lightgallery");
const categoryContainer = document.getElementById("category-container");
const eventFilter = document.querySelector(".event-filter");

// console.log(sectionCategory, stickyMob, stickyNav, ticketBtn);

stickyFunc(stickyNav, sectionCategory, ticketBtn);
stickyFunc(stickyMob, sectionCategory);

categoryLeft.addEventListener("click", (e) => {
  e.preventDefault();
});

categoryRight.addEventListener("click", (e) => {
  e.preventDefault();
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
        imgSrc: "picture13.jpeg",
        event: "2022_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture14.jpeg",
        event: "2024_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture15.jpeg",
        event: "2025_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture16.jpeg",
        event: "2026_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture17.jpeg",
        event: "2027_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture11.jpeg",
        event: "2028_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture15.jpeg",
        event: "2022_wedding",
        createdAt: new Date(),
      },
      {
        imgSrc: "picture15.jpeg",
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

const glightboxGalleryConfig = function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
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
      h-36 hover:scale-105 lg:w-52 lg:h-52 bg-gray-50 dark:bg-gray-100">
      
      </div><img src="/public/img/${eventCategory[category].imgSrc}"
          class=" object-cover object-center h-20 lg:py-2 lg:h-36"
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
      `<div class="relative overflow-hidden rounded-md aspect-box">
   <a href="/public/img/${img.imgSrc}" class="relative gallery-skeleton w-full glightbox absolute top-0 left-0 block h-full zoom ">
     <img src="" data-src="/public/img/${img.imgSrc}" class="
     category-image
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
  glightboxGalleryConfig();
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
  lazyLoadingImages();
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
  lazyLoadingImages();
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

function lazyLoadingImages() {
  const categoryImages = document.querySelectorAll(".category-image");
  // console.log(categoryImages);

  const categoryImageIntersection = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        const parent = lazyImage.parentElement;
        lazyImage.addEventListener("load", () => {
          parent.classList.add("hide-image-loader");
        });

        categoryImageIntersection.unobserve(lazyImage);
      });
    },
    { root: null, threshold: 0.2 }
  );

  categoryImages.forEach((image) => {
    categoryImageIntersection.observe(image);
  });
}
lazyLoadingImages();

import { stickyFunc } from "./navigation.js";
const sectionCategory = document.querySelector(".section--category");
const stickyNav = document.querySelector(".sticky-nav");
const stickyMob = document.querySelector(".stick-mobile");
const ticketBtn = document.querySelector(".ticket");
const categoryLeft = document.querySelector(".catergory-left");
const categoryRight = document.querySelector(".catergory-right");
const categories = document.querySelector(".categories");
const lightgalleryContainer = document.getElementById("lightgallery");
const categoryContainer = document.getElementById("category-container");

// console.log(sectionCategory, stickyMob, stickyNav, ticketBtn);
stickyFunc(stickyNav, sectionCategory, ticketBtn);
stickyFunc(stickyMob, sectionCategory);

if (categories.scrollLeft === 0) categoryLeft.classList.add("text-gray-400");

const scrollLeft = function () {
  if (categories.scrollLeft === 0) {
    console.log(categories.scrollLeft);
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

const categoryImages = {
  marriage: ["picture11.jpeg", "picture12.jpeg"],
  singing: ["picture14.jpeg", "picture13.jpeg"],
};

const changeCategory = function (category = "marriage") {
  lightgalleryContainer.innerHTML = categoryImages[category].reduce(
    (acc, img) => {
      return (
        acc +
        `<div data-src="/public/img/${img}" class="relative overflow-hidden rounded-md aspect-box">
 <a class="absolute top-0 left-0 block h-full zoom">
   <img src="/public/img/${img}" class="
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
    },
    ""
  );
};

const lightGalleryConfig = function () {
  lightGallery(lightgalleryContainer, {
    plugins: [lgThumbnail],
    speed: 500,
  });
};

let lastCategoryELementSelected;
categoryContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (lastCategoryELementSelected) {
    lastCategoryELementSelected.dataset.selected = false;
  }
  const categoryItemSelected = (lastCategoryELementSelected =
    e.target.closest(".category-item"));
  if (categoryItemSelected) {
    categoryItemSelected.dataset.selected = true;
    changeCategory(categoryItemSelected.dataset.category);
    lightGalleryConfig();
  }
});

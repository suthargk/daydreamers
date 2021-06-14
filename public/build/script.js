import { stickyFunc } from "./navigation.js";
const genre = document.querySelector(".section-genre");
const header = document.querySelector("header");
const stickyNav = document.querySelector(".sticky-nav");
const stickyMob = document.querySelector(".stick-mobile");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightDesktop = document.querySelector(".light-toggle-desktop");
const darkDesktop = document.querySelector(".dark-toggle-desktop");
const lightMob = document.querySelector(".light-toggle-mob");
const darkMob = document.querySelector(".dark-toggle-mob");
const navMob = document.querySelector(".nav-mob");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const root = document.querySelector(":root");

stickyFunc(stickyNav, header, ticketBtn);
stickyFunc(stickyMob, header);

const imageTarget = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("image-filter");
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "20px",
});

imageTarget.forEach((img) => imgObserver.observe(img));

// const sectionObserverFunc = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("opacity-0", "transform", "translate-y-28");
//   observer.unobserve(entry);
// };

// const sectionObserver = new IntersectionObserver(sectionObserverFunc, {
//   root: null,
//   threshold: 0.5,
// });

// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add(
//     "opacity-0",
//     "transition-all",
//     "duration-700",
//     "transform",
//     "translate-y-28"
//   );
// });

// sectionObserver.observe(footer);
// footer.classList.add("opacity-0", "transform", "translate-y-28");

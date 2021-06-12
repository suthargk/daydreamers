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
const categories = document.querySelector(".categories");
const themeToggleBtnDesktop = document.getElementById(
  "theme-toggle-btn-desktop"
);
const themeToggleBtnMob = document.getElementById("theme-toggle-btn-mob");
const allSections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

window.addEventListener("load", () => {
  const resetDarkToggleBtn = function (light, dark) {
    if (localStorage.theme === "dark") {
      light.classList.add("hidden");
      dark.classList.remove("hidden");
      root.style.setProperty("--lightColor", "white");
    } else {
      root.style.setProperty("--lightColor", "#6e01f2");
    }
  };
  resetDarkToggleBtn(lightDesktop, darkDesktop);
  resetDarkToggleBtn(lightMob, darkMob);
});

const stickyFunc = function (type, btn) {
  const stickyNavFunc = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      type.classList.add(
        "bg-white",
        "dark:bg-gray-800",
        // "opacity-95",
        "text-primaryLight",
        "shadow-lg",
        "dark:text-gray-50"
      );
      if (btn) {
        btn.classList.remove("bg-white", "dark:text-gray-800", "text-gray-800");
        btn.classList.add(
          "bg-primaryLight",
          "dark:bg-gray-50",
          "dark:text-gray-800",
          "text-gray-50"
        );
      }
    } else {
      type.classList.remove(
        "bg-white",
        // "opacity-95",
        "shadow-lg",
        "text-primaryLight",
        "dark:bg-gray-800",
        "dark:text-gray-50"
      );

      if (btn) {
        btn.classList.remove(
          "bg-primaryLight",
          "text-gray-50",
          "dark:bg-gray-50",
          "dark:text-gray-800"
        );
        btn.classList.add("bg-white", "text-gray-800", "dark:text-gray-800");
      }
    }
  };

  const headerObserver = new IntersectionObserver(stickyNavFunc, {
    root: null,
    threshold: 0.95,
  });
  headerObserver.observe(header);
};

stickyFunc(stickyNav, ticketBtn);
stickyFunc(stickyMob);

/* Audio link for notification */
const openClose = function (e) {
  let audio = new Audio("/public/img/pop4.mp3");
  audio.play();
  e.preventDefault();
  if (navMob.classList.contains("hidden")) {
    navMob.classList.add("flex");
    navMob.classList.remove("hidden");
  } else {
    navMob.classList.remove("flex");
    navMob.classList.add("hidden");
  }
};
hamburger.addEventListener("click", openClose);
close.addEventListener("click", openClose);

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

themeToggleFunc = function (light, dark) {
  let audio = new Audio("/public/img/preview.mp3");
  audio.play();
  if (!localStorage.getItem("theme") || localStorage.theme === "light") {
    light.classList.add("hidden");
    dark.classList.remove("hidden");
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    root.style.setProperty("--lightColor", "white");
  } else if (localStorage.theme === "dark") {
    light.classList.remove("hidden");
    dark.classList.add("hidden");
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    root.style.setProperty("--lightColor", "#6e01f2");
  }
};
themeToggleBtnDesktop.addEventListener("click", (e) => {
  e.preventDefault();
  themeToggleFunc(lightDesktop, darkDesktop);
});
themeToggleBtnMob.addEventListener("click", (e) => {
  e.preventDefault();
  themeToggleFunc(lightMob, darkMob);
});

const sectionObserverFunc = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("opacity-0", "transform", "translate-y-28");
  observer.unobserve(entry);
};

const sectionObserver = new IntersectionObserver(sectionObserverFunc, {
  root: null,
  threshold: 0.5,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add(
    "opacity-0",
    "transition-all",
    "duration-700",
    "transform",
    "translate-y-28"
  );
});

sectionObserver.observe(footer);
footer.classList.add("opacity-0", "transform", "translate-y-28");

const categoryLeft = document.querySelector(".catergory-left");
const categoryRight = document.querySelector(".catergory-right");

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

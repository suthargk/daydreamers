const genre = document.querySelector(".section-genre");
const header = document.querySelector("header");
const htmlBig = document.querySelector("html");
const sticky = document.querySelector(".stick");
const stickyMob = document.querySelector(".stick-mobile");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightToggleMob = document.querySelector("#light-toggle-mob");
const lightToggleDesk = document.querySelector("#light-toggle-desktop");

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const navMob = document.querySelector(".nav-mob");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const root = document.querySelector(":root");

const stickyFunc = function (type, btn) {
  const stickyNav = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) {
      type.classList.add(
        "bg-white",
        "dark:bg-gray-800",
        // "opacity-95",
        "text-primaryLight",
        "shadow-lg",
        "dark:text-gray-50"
      );
      type.classList.remove("text-gray-50");

      btn.classList.remove("bg-white", "text-gray-700");
      btn.classList.add(
        "bg-primaryLight",
        "text-gray-50",
        "dark:bg-gray-50",
        "dark:text-gray-800"
      );
    } else {
      type.classList.remove(
        "bg-white",
        // "opacity-95",
        "shadow-lg",
        "text-primaryLight",
        "dark:bg-gray-800"
      );
      btn.classList.remove("bg-primaryLight", "text-gray-50");
      btn.classList.add("bg-white", "text-gray-700");
    }
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.95,
  });
  headerObserver.observe(header);
};

stickyFunc(sticky, ticketBtn);
stickyFunc(stickyMob, ticketBtnMob);

const lightToggleFunc = function (e) {
  e.preventDefault();

  htmlBig.classList.toggle("dark");
  let audio = new Audio("/public/img/preview.mp3");
  audio.play();
  if (htmlBig.classList.contains("dark")) {
    root.style.setProperty("--lightColor", "white");
    light.classList.remove("inline-block");
    light.classList.add("hidden");
    dark.classList.add("inline-block");
    dark.classList.remove("hidden");
  } else {
    root.style.setProperty("--lightColor", "#6e01f2");
    light.classList.add("inline-block");
    light.classList.remove("hidden");
    dark.classList.remove("inline-block");
    dark.classList.add("hidden");
  }

  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   htmlBig.classList.add("dark");
  // } else {
  //   htmlBig.classList.remove("dark");
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
};
lightToggleMob.addEventListener("click", lightToggleFunc);
lightToggleDesk.addEventListener("click", lightToggleFunc);
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

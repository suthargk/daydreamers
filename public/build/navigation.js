export const stickyNav = document.querySelector(".sticky-nav");
export const stickyMob = document.querySelector(".stick-mobile");
export const hamburger = document.querySelector(".hamburger");
export const close = document.querySelector(".close");
export const ticketBtn = document.querySelector(".ticket");
export const ticketBtnMob = document.querySelector(".ticket-mobile");
export const lightDesktop = document.querySelector(".light-toggle-desktop");
export const darkDesktop = document.querySelector(".dark-toggle-desktop");
export const lightMob = document.querySelector(".light-toggle-mob");
export const darkMob = document.querySelector(".dark-toggle-mob");
export const navMob = document.querySelector(".nav-mob");
export const logo = document.getElementById("logo");
const root = document.querySelector(":root");

export function stickyFunc(type, targetElement, btn = undefined) {
  const stickyNavFunc = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      console.log("h");
      if (localStorage.theme === "dark") {
        logo.src = "img/logo-white.png";
      } else {
        logo.src = "img/logo-dark.png";
      }
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
      logo.src = "img/logo-white.png";
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

  headerObserver.observe(targetElement);
}

// stickyFunc(stickyNav, ticketBtn, header);
// stickyFunc(stickyMob, header);

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

const themeToggleFunc = function (light, dark) {
  let audio = new Audio("/public/img/preview.mp3");
  audio.play();
  if (!localStorage.getItem("theme") || localStorage.theme === "light") {
    logo.src = "img/logo-white.png";
    light.classList.add("hidden");
    dark.classList.remove("hidden");
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    root.style.setProperty("--lightColor", "white");
  } else if (localStorage.theme === "dark") {
    logo.src = "img/logo-dark.png";
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

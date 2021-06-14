const stickyNav = document.querySelector(".sticky-nav");
const stickyMob = document.querySelector(".stick-mobile");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightDesktop = document.querySelector(".light-toggle-desktop");
const darkDesktop = document.querySelector(".dark-toggle-desktop");
const lightMob = document.querySelector(".light-toggle-mob");
const darkMob = document.querySelector(".dark-toggle-mob");
const navMob = document.querySelector(".nav-mob");
const root = document.querySelector(":root");

export function stickyFunc(type, targetElement, btn = undefined) {
  console.log(type, targetElement, btn);
  const stickyNavFunc = function (entries, observer) {
    const [entry] = entries;
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

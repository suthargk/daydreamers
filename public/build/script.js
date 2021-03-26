const genre = document.querySelector(".section-genre");
const header = document.querySelector("header");
const htmlBig = document.querySelector("html");
const sticky = document.querySelector(".stick");
const stickMob = document.querySelector(".stick-mobile");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightToggle = document.querySelector(".light-toggle");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const stickyFunc = function (type, btn) {
  const stickyNav = function (entries, observer) {
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
stickyFunc(stickMob, ticketBtnMob);

lightToggle.addEventListener("click", function (e) {
  e.preventDefault();

  htmlBig.classList.toggle("dark");
  console.log(htmlBig.classList.contains("dark"));
  if (htmlBig.classList.contains("dark")) {
    light.classList.remove("inline-block");
    light.classList.add("hidden");
    dark.classList.add("inline-block");
    dark.classList.remove("hidden");
  } else {
    light.classList.add("inline-block");
    light.classList.remove("hidden");
    dark.classList.remove("inline-block");
    dark.classList.add("hidden");
  }
  let audio = new Audio("/public/img/preview.mp3");
  audio.play();

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
});

/* Audio link for notification */

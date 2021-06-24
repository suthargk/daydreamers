window.addEventListener("load", function () {});
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
export const logo = document.querySelectorAll(".logo");

const root = document.querySelector(":root");
let entry;
export function stickyFunc(type, targetElement, btn = undefined) {
  const stickyNavFunc = function (entries, observer) {
    [entry] = entries;
    if (!entry.isIntersecting) {
      if (localStorage.theme !== "dark") {
        logo.forEach((lg) => (lg.src = "/public/img/logo-dark.png"));
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
      logo.forEach((lg) => (lg.src = "/public/img/logo-white.png"));
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
    if (entry.isIntersecting || !entry.isIntersecting) {
      logo.forEach((lg) => (lg.src = "/public/img/logo-white.png"));
    }
    root.style.setProperty("--dottedColor", "#fff");
    light.classList.add("hidden");
    dark.classList.remove("hidden");
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    root.style.setProperty("--lightColor", "white");
  } else if (localStorage.theme === "dark") {
    if (entry.isIntersecting) {
      logo.forEach((lg) => (lg.src = "/public/img/logo-white.png"));
    } else {
      logo.forEach((lg) => (lg.src = "/public/img/logo-dark.png"));
    }
    root.style.setProperty("--dottedColor", "#3c4859");
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

const ticketModal = function (e) {
  e.preventDefault();
  const modalMarkup = ``;
};

ticketBtn.addEventListener("click", ticketModal);

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Home | Day Dreamers</title>

//     <!-- meta -->
//     <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=7" />
//     <meta name="description" content="" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />

//     <!-- css files -->
//     <link rel="stylesheet" href="build/style.css" />

//     <!-- plyr.io -->
//     <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />

//     <!-- slick carousel -->
//     <link rel="stylesheet" href="build/slick/slick.css">
//     <link rel="stylesheet" href="build/slick/slick-theme.css">
//     <!-- css.gg -->
//     <link href="https://css.gg/css" rel="stylesheet" />
//     <script>

//       if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }
//     </script>
//   </head>
//   <body class="relative font-sans antialiased dark:bg-gray-900">
//     <!-- <div class="fixed h-full w-full bg-white top-0 z-50 flex justify-center items-center">
//       <div class="bg-blue-500 h-64 w-64 rounded-md"> </div>
//     </div> -->
//       <!-- Mobile NAVBAR -->
//     <nav class="fixed z-40 flex flex-row items-center justify-between w-full px-6 lg:hidden stick-mobile text-gray-50">
//       <div class="my-2 ml-2"><a href="#"><img id="logo" src="img/logo-white.png" class="h-16 logo" alt="Logo"></a></div>
//       <div class="flex flex-row items-center">
//        <!-- light mode toggle mobile -->
//        <a href="#" id="theme-toggle-btn-mob" class="mr-2">
//         <svg class="light-toggle-mob"
// width="24"
// height="24"
// viewBox="0 0 24 24"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
//   fill="currentColor"
// />
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
//   fill="currentColor"
// />
// </svg>
// <svg class="hidden dark-toggle-mob"
// width="24"
// height="24"
// viewBox="0 0 24 24"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
//   fill="currentColor"
// />
// </svg>
//       </a>
//         <a href="#" class="p-2 hamburger focus:outline-none"><svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
//             fill="currentColor"
//           />
//           <path
//             d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
//             fill="currentColor"
//           />
//           <path
//             d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
//             fill="currentColor"
//           />
//         </svg>
//         </a>
//       </div>
//       <ul class="absolute z-50 flex-col justify-center hidden w-11/12 overflow-hidden text-gray-500 bg-gray-50	rounded-md shadow-xl dark:text-gray-50 dark:bg-gray-800 filter drop-shadow	 top-1/4 nav-mob">
//         <!-- <div class="absolute top-0 w-full h-2 bg-primaryLight"></div> -->
//         <div class="flex flex-row justify-between">
//           <span class="p-4 mb-3 text-sm tracking-wider text-gray-400 uppercase">Navigation</span>
//         <a href="#" class="p-4 mb-3 text-gray-500 close focus:outline-none"><svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
//             fill="currentColor"
//           />
//         </svg></a>
//         </div>
//         <li class=""><a href="#" class="block w-full px-4 py-2 text-base font-medium tracking-wider capitalize text-primaryLight">Home</a></li>
//         <li class=""><a href="about.html" class="block w-full px-4 py-2 text-base tracking-wider capitalize">About</a></li>
//         <li class=""><a href="gallery.html" class="block w-full px-4 py-2 text-base tracking-wider capitalize">Gallery</a></li>
//         <li class=""><a href="#" class="block w-full px-4 py-2 text-base tracking-wider capitalize">Contact</a></li>
//         <li><a href="#" class="block px-3 py-2 mt-2 font-normal tracking-wide text-center text-white uppercase bg-primary">Buy tickets</a>
//         </li>
//       </ul>
//     </nav>

//           <!-- Desktop NAVBAR -->
//     <nav style="padding: .50% 10%;" class="fixed z-40 justify-between left-1/2 transform -translate-x-1/2 hidden w-full transition-all duration-300 lg:flex lg:flex-row text-gray-50 sticky-nav">
//       <div class="">
//         <a href="#" class="">
//           <img src="img/logo-white.png" class="w-auto h-16 logo" alt="">
//         </a>
//       </div>
//       <ul class="flex flex-row justify-center items-center">
//         <li class="mr-4 nav-link"><a href="#" class="px-3 py-3 text-lg font-normal tracking-wider capitalize">Home</a></li>
//         <li class="mr-4 nav-link"><a href="about.html" class="px-3 py-3 text-lg font-normal tracking-wider capitalize ">About</a></li>

//         <li class="mr-4 nav-link"><a href="gallery.html" class="px-3 py-3 text-lg font-normal tracking-wider capitalize ">Gallery</a></li>
//         <li class="mr-4 nav-link"><a href="#" class="px-3 py-3 text-lg font-normal tracking-wider capitalize ">Info</a></li>

//       </ul>
//      <div class=" lg:items-center lg:justify-start lg:flex lg:flex-row">
//       <!-- Light mode Toggle Desktop -->

//       <a href="#" class="px-4 py-2.5 font-medium border-primary rounded-3xl ticket">Buy tickets</a>
//       <a href="#" id="theme-toggle-btn-desktop" class="ml-6">
//         <svg class="light-toggle-desktop"
// width="24"
// height="24"
// viewBox="0 0 24 24"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
//   fill="currentColor"
// />
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
//   fill="currentColor"
// />
// </svg>
// <svg class="hidden dark-toggle-desktop"
// width="24"
// height="24"
// viewBox="0 0 24 24"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   fill-rule="evenodd"
//   clip-rule="evenodd"
//   d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
//   fill="currentColor"
// />
// </svg>
//       </a>
//      </div>
//     </nav>
//     <!-- <header class="h-screen bg-center bg-no-repeat bg-cover bg-hero ">

//     </header> -->
//     <header class="relative h-screen w-full" style="background: #6e01f2; background: linear-gradient(to bottom,  #6e01f2 0%,#7510f7 100%);">
//       <div id="canvas"></div>
//     </header>
//     <section class="relative px-3 mb-20 pt-14 lg:pt-20 section-genre">
//       <h2
//         class="mb-10 text-2xl font-bold tracking-wider text-center text-gray-900 uppercase lg:text-3xl dark:text-gray-50"
//       >
//         what we do
//       </h2>
//       <div class="w-full">
//         <div
//           class="grid justify-center w-full grid-cols-2 gap-3 mx-auto my-0 mb-12 lg:grid-cols-3 lg:w-2/5 md:w-4/5 md:grid-cols-3 auto-rows-auto"
//         >
//           <a
//             href="#"
//             class="flex flex-row items-center justify-center px-2 py-4 transition duration-300 ease-in-out border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-50 focus:outline-none hover:shadow-inner hover:bg-gray-100"
//           >
//             <img src="svg/wedding.svg" alt="wedding" class="w-10 h-10" />
//             <span class="inline-block text-base leading-loose tracking-wide"
//               >Marriage</span
//             >
//           </a>
//           <a
//             href="#"
//             class="flex flex-row items-center justify-center px-2 py-4 transition duration-300 ease-in-out border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-50 focus:outline-none hover:shadow-inner hover:bg-gray-100"
//           >
//             <img src="svg/singing.svg" alt="wedding" class="w-10 h-10" />
//             <span class="inline-block text-base leading-loose tracking-wide"
//               >Singing</span
//             >
//           </a>
//           <a
//             href="#"
//             class="flex flex-row items-center justify-center px-2 py-4 transition duration-300 ease-in-out border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-50 focus:outline-none hover:shadow-inner hover:bg-gray-100"
//           >
//             <img src="svg/couple.svg" alt="wedding" class="w-10 h-10" />
//             <span class="inline-block text-base leading-loose tracking-wide"
//               >Dancing</span
//             >
//           </a>
//           <!-- <a
//             href="#"
//             class="flex flex-row items-center justify-center px-2 py-4 transition duration-300 ease-in-out border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-50 focus:outline-none hover:shadow-inner hover:bg-gray-100"
//           >
//             <img src="svg/party.svg" alt="wedding" class="w-10 h-10" />
//             <span class="inline-block text-base leading-loose tracking-wide"
//               >Party</span
//             >
//           </a> -->
//         </div>
//         <div class="mx-auto my-0 text-center">
//           <a href="#" class="inline-block active:translate-y-3"
//             ><div
//               class="flex flex-row justify-center py-2 font-medium transition duration-300 ease-in-out border-2 shadow px-7 btn-more text-primary dark:text-white dark:hover:bg-primaryLight dark:hover:border-primaryLight dark:bg-primary hover:translate-y-2text-primary rounded-3xl border-primary hover:bg-primary hover:text-gray-50"
//             >
//               Show more
//               <i
//                 class="self-end ml-1 transition-transform duration-300 ease-in-out gg-arrow-right"
//               ></i></div
//           ></a>
//         </div>
//       </div>
//     </section>

//     <section class="mb-16 section-event-card ">
//       <h2
//         class="mb-10 text-2xl font-bold tracking-wider text-center text-gray-900 uppercase lg:text-3xl dark:text-gray-50"
//       >
//         Upcoming Events
//       </h2>
//       <div class="relative w-full mb-6 lg:mb-20">
//         <div class="relative w-4/5 mx-auto my-0 overflow-hidden responsive focus:outline-none lg:w-11/12 h-72 lg:flex lg:justify-center lg:items-center">

//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//           <a
//             href="#" data-label="1"
//             class="w-4/5 mr-2 overflow-hidden transition-all duration-300 ease-in-out rounded shadow-md focus:outline-none md:w-1/3 lg:mx-10 top-custom event-card zoom lg:w-1/4 dark:bg-gray-700"
//           >

//             <div class="relative w-full overflow-hidden">
//               <div
//               class="absolute z-10 px-3 py-1 text-xs font-semibold bg-white rounded w-14 top-2 left-2 vivid"
//             >
//               ₹249
//             </div>
//               <img src="img/picture_1-lazy.jpg" data-src="img/picture_1.jpg" draggable="false" class="object-cover object-top w-full h-40 transition-all duration-300 ease-in-out image-filter"></img>
//             </div>
//             <div class="px-4 pt-4 pb-6 dark:text-gray-50">
//               <span
//                 class="block text-sm font-semibold leading-loose tracking-wide"
//                 >Takhatgarh &mdash; Udaan Festival 2</span
//               >
//               <span
//                 class="block mb-1 text-xs font-medium text-gray-600 dark:text-gray-100"
//                 >September 2 | 8:00 PM - 10:00 PM</span
//               >
//               <span
//                 class="block text-xs font-medium text-gray-700 dark:text-gray-50"
//                 >Takhatgarh, India</span
//               >
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="mx-auto my-0 text-center">
//         <a href="#" class="inline-block active:translate-y-3"
//           ><div
//             class="flex flex-row justify-center py-2 font-medium transition duration-300 ease-in-out border-2 shadow px-7 btn-more text-primary dark:text-white dark:hover:bg-primaryLight dark:hover:border-primaryLight dark:bg-primary hover:translate-y-2text-primary rounded-3xl border-primary hover:bg-primary hover:text-gray-50"
//           >
//             Show more
//             <i
//               class="self-end ml-1 transition-transform duration-300 ease-in-out gg-arrow-right"
//             ></i></div
//         ></a>
//       </div>
//     </section>
//     <section class="p-3 pb-10 bg-primaryLight dark:bg-darkthemeBlue lg:px-6 lg:pb-16 lg:pt-8 text-gray-50">

//       <h2 class="mt-4 mb-5 text-2xl font-bold tracking-wider text-center uppercase lg:mt-6 lg:mb-16 heading-secondary">We Make Memorable Moments</h2>

//       <div class="relative w-full p-1 lg:w-2/5 lg:mx-auto">
//           <div class="absolute left-1 -bottom-5 lg:transform lg:-top-5 lg:-left-2 lg:-rotate-12 lg:block">
//               <p class="text-base leading-none font-nanum">Day Dreamers</p>
//           </div>
//           <div id="player" class="plyr__video-embed" data-plyr-provider="youtube" data-plyr-embed-id="_Ans3UIsjvk"></div>

//           <div class="mt-10 text-center">
//             <a href="#" class="inline-block"
//           ><div
//             class="flex flex-row justify-center py-2 font-medium capitalize transition duration-300 ease-in-out border-2 shadow px-7 btn-more bg-gray-50 text-primary dark:text-primary dark:bg-gray-50 hover:translate-y-2 rounded-3xl border-gray-50"
//           >
//             View youtube channel
//             <i
//               class="self-end ml-1 transition-transform duration-300 ease-in-out gg-arrow-right"
//             ></i></div
//         ></a>
//           </div>
//       </div>
//   </section>

//     <section class="relative section-testimonials w-full py-16 mb-12 dark:text-gray-50">
//       <div class="">
//         <h2
//         class="mb-10 text-2xl font-bold tracking-wider text-center text-gray-900 uppercase dark:text-gray-50 lg:text-3xl"
//       >
//         What people say
//       </h2>
//       <div class="mx-auto lg:w-1/2 single-item">
//         <div class="flex flex-col items-center justify-center w-4/5 mx-3 lg:w-full focus:outline-none">
//           <div class="mb-6">
//             <img src="img/pascal.png" class="w-16 h-16 mx-auto rounded-full" alt="User 1">
//           </div>
//           <p class="mx-auto mb-6 text-lg leading-normal tracking-wide text-center text-gray-600 lg:w-4/5 dark:text-gray-200">&quot;pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.&rdquo;</p>
//           <div class="text-center">
//             <h3 class="text-xl font-semibold">Allen Heich</h3>
//             <span class="text-base font-light tracking-widest">Singer</span>
//           </div>
//           <!-- <div class="flex flex-row justify-center w-1/4 mt-6 lg:mt-10">
//             <button class="w-4 h-4 mr-2 border-2 rounded-full border-gray-150 focus:outline-none active-slider-button"></button>
//             <button class="w-4 h-4 mr-2 border-2 rounded-full border-gray-150 focus:outline-none"></button>
//           </div> -->
//         </div>
//         <div class="flex flex-col items-center justify-center w-4/5 mx-3 lg:w-full focus:outline-none">
//           <div class="mb-6">
//             <img src="img/pascal.png" class="w-16 h-16 mx-auto rounded-full" alt="User 1">
//           </div>
//           <p class="mx-auto mb-6 text-lg leading-normal tracking-wide text-center text-gray-600 lg:w-4/5 dark:text-gray-200">&quot;pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.&rdquo;</p>
//           <div class="text-center">
//             <h3 class="text-xl font-semibold">Allen Heich</h3>
//             <span class="text-base font-light tracking-widest">Singer</span>
//           </div>
//           <!-- <div class="flex flex-row justify-center w-1/4 mt-6 lg:mt-10">
//             <button class="w-4 h-4 mr-2 border-2 rounded-full border-gray-150 focus:outline-none active-slider-button"></button>
//             <button class="w-4 h-4 mr-2 border-2 rounded-full border-gray-150 focus:outline-none"></button>
//           </div> -->
//         </div>
//       </div>
//       </div>
//       <div class="mx-auto mt-16 text-center">
//         <a href="#" class="inline-block active:translate-y-3"
//           ><div
//             class="flex flex-row justify-center py-2 font-medium transition duration-300 ease-in-out border-2 shadow px-7 btn-more text-primary dark:text-white dark:hover:bg-primaryLight dark:hover:border-primaryLight dark:bg-primary hover:translate-y-2text-primary rounded-3xl border-primary hover:bg-primary hover:text-gray-50"
//           >
//             See more testimonials
//             <i
//               class="self-end ml-1 transition-transform duration-300 ease-in-out gg-arrow-right"
//             ></i></div
//         ></a>
//       </div>
//     </section>

//     <section class="w-full py-10 mb-20 lg:py-16 dark:text-gray-50">
//       <div class="flex flex-col items-center justify-center overflow-hidden lg:items-start lg:flex-row ">
//         <div class="w-full mb-6 lg:w-1/4"><img src="img/founder-lazy.jpg" data-src="img/founder.jpg" class="w-4/5 mx-auto rounded image-filter lg:w-4/5" alt="Founder"></div>
//         <div class="flex flex-col items-center w-11/12 text-base leading-relaxed tracking-wide text-justify text-gray-600 dark:text-gray-200 lg:w-1/2">
//           <span class="self-start mb-8 text-gray-600 lg:mb-20 dark:text-gray-50">Transform your business processes and physical operations through autonomous arficial intelligence systems.
//             In this summit, we look at how to improve the interpretation of events and technology, to enable the confidence
//             levels of decision making even to the point of automation. In contexts where physical operations are involved,
//             we look at how to improve efficiency, accuracy, and safely when operating at scale.
//           </span>
//           <div class="flex flex-col items-center lg:self-end">
//             <span class="mb-2 text-xl font-light tracking-wider uppercase">Arjun Suthar</span>
//             <span class="mb-1 text-sm tracking-widest uppercase">founder</span>
//             <span class="text-gray-800 font-nanum dark:text-white">Day Dreamers</span>
//           </div>
//         </div>

//       </div>
//     </section>
//     <section class="w-full px-16 pt-10 pb-24 bg-gray-800 lg:pb-12 dark:text-gray-50">
//       <div class="grid grid-cols-3 gap-2 lg:gap-20 lg:grid-cols-6 auto-rows-auto">
//         <div class="">
//           <img src="img/sponsor-1.png" alt="sponsor-1">
//         </div>
//         <div class="">
//           <img src="img/sponsor-2.png" alt="sponsor-2">
//         </div>
//         <div class="">
//           <img src="img/sponsor-3.png" alt="sponsor-3">
//         </div>
//         <div class="">
//           <img src="img/sponsor-4.png" alt="sponsor-4">
//         </div>
//         <div class="">
//           <img src="img/sponsor-1.png" alt="sponsor-5">
//         </div>
//         <div class="">
//           <img src="img/sponsor-1.png" alt="sponsor-1">
//         </div>

//       </div>
//     </section>
//     <footer class="py-16 transition-all duration-700 bg-primaryLight dark:bg-darkthemeBlue ">
//       <div class="flex flex-col items-center justify-center w-4/5 p-8 mx-auto -mt-32 tracking-wide text-gray-700 bg-white shadow-xl dark:text-gray-50 dark:bg-gray-700 lg:-mt-28 lg:flex-row lg:justify-evenly rounded-2xl">
//         <h3 class="text-2xl font-semibold lg:text-3xl">Plan an event</h3>
//         <span class="mt-6 text-sm leading-relaxed text-center lg:w-2/6 lg:mt-0">We walk our clients through the event planning and design process to create a successful event.</span>
//         <a href="#" class="mt-8 lg:mt-0"
//             ><div
//               class="flex flex-row justify-center py-2 font-medium transition duration-300 ease-in-out border-2 shadow px-7 btn-more border-primary dark:border-gray-50 bg-primaryLight text-gray-50 dark:text-gray-900 dark:bg-gray-50 hover:translate-y-2 rounded-3xl hover:bg-primary hover:border-primaryLight hover:text-white "
//             >
//               Let's do this
//               <i
//                 class="self-end ml-1 transition-transform duration-300 ease-in-out gg-arrow-right"
//               ></i></div
//           ></a>
//       </div>
//       <div class="flex flex-col items-center justify-center mt-24">
//         <div class="mb-6">
//           <img class=" h-32" src="img/logo-white.png" alt="Day Dreamers Logo">
//         </div>
//         <span class="text-xl tracking-wide text-center opacity-70 text-gray-50">We make memorable moments.</span>
//         <ul class="flex flex-row items-center w-4/5 mt-10 md:w-1/3 lg:w-1/4 justify-evenly text-gray-50">
//           <li><a href="https://www.instagram.com/daydreamers_event" target="_blank" class="flex flex-row items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-50 hover:text-primaryLight border-opacity-40"><i class="gg-instagram"></i></a></li>
//           <li><a href="https://www.facebook.com/DayDreamersEvents.in" target="_blank" class="flex flex-row items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-50 hover:text-primaryLight border-opacity-40"><i class="gg-facebook"></i></a></li>
//           <li><a href="https://www.twitter.com/daydreamers_event" target="_blank" class="flex flex-row items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-50 hover:text-primaryLight border-opacity-40"><i class="gg-twitter"></i></a></li>
//           <li><a href="https://wa.me/+919001156087" class="flex flex-row items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-50 hover:text-primaryLight border-opacity-40"><svg class="w-5 h-5" viewBox="0 0 500 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <path d="M345.833 291.669C341.667 289.585 314.583 277.085 310.417 275.002C306.25 272.919 302.083 272.919 297.917
//             277.085C293.75 281.252 285.417 293.752 281.25 297.919C279.167 302.085 275 302.085 270.833 300.002C256.25 293.752
//             241.667 285.419 229.167 275.002C218.75 264.585 208.333 252.085 200 239.585C197.917 235.419 200 231.252 202.083 229.169C204.167
//             227.085 206.25 222.919 210.417 220.835C212.5 218.752 214.583 214.585 214.583 212.502C216.667 210.419 216.667 206.252 214.583 204.169C212.5
//             202.085 202.083 177.085 197.917 166.669C195.833 152.085 191.667 152.085 187.5 152.085C185.417 152.085 181.25 152.085 177.083 152.085C172.917
//             152.085 166.667 156.252 164.583 158.335C152.083 170.835 145.833 185.419 145.833 202.085C147.917 220.835 154.167 239.585 166.667 256.252C189.583
//             289.585 218.75 316.669 254.167 333.335C264.583 337.502 272.917 341.669 283.333 343.752C293.75 347.919 304.167 347.919 316.667 345.835C331.25 343.752 343.75
//             333.335 352.083 320.835C356.25 312.502 356.25 304.169 354.167 295.835C354.167 295.835 350 293.752 345.833 291.669ZM397.917 102.085C316.667 20.8352 185.417 20.8352
//             104.167 102.085C37.4998 168.752 24.9998 270.835 70.8332 352.085L41.6665 458.335L152.083 429.169C183.333 445.835 216.667 454.169 250 454.169C364.583 454.169 456.25 362.502
//             456.25 247.919C458.333 193.752 435.417 141.669 397.917 102.085ZM341.667 393.752C314.583 410.419 283.333 420.835 250 420.835C218.75 420.835 189.583 412.502 162.5 397.919L156.25
//             393.752L91.6665 410.419L108.333 347.919L104.167 341.669C54.1665 258.335 79.1665 154.169 160.417 102.085C241.667 50.0019 345.833 77.0852 395.833 156.252C445.833 237.502 422.917
//             343.752 341.667 393.752Z"></path>
//         </svg></a></li>
//           <li><a href="https://www.youtube.com/channel/UCRxswDjeH1QDCn4IVGqsrqg/" target="_blank" class="flex flex-row items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-50 hover:text-primaryLight border-opacity-40"><i class="gg-youtube"></i></a></li>
//         </ul>
//         <div class="mt-8 text-sm text-gray-50">
//           <span class=" opacity-70">Handcrafted by </span>
//           <a href="https://twitter.com/suthargk" target="_blank" class="tracking-wide opacity-90">Gaurav Suthar</a>
//           <span class="text-xs vivid">&nbsp;🎃&nbsp;</span>
//         </div>
//       </div>

//     </footer>
//     <script type="module" defer src="build/script.js"></script>

//     <script src="https://cdn.plyr.io/3.6.2/plyr.polyfilled.js"></script>

// <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
// <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.min.js"></script>
// <script>
//   var renderer, scene, camera, composer, circle, skelet, particle;

// window.onload = function() {
//   init();
//   animate();
// }

// function init() {
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.autoClear = false;
//   renderer.setClearColor(0x000000, 0.0);
//   document.getElementById('canvas').appendChild(renderer.domElement);

//   scene = new THREE.Scene();

//   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
//   camera.position.z = 400;
//   scene.add(camera);

//   circle = new THREE.Object3D();
//   skelet = new THREE.Object3D();
//   particle = new THREE.Object3D();

//   scene.add(circle);
//   scene.add(skelet);
//   scene.add(particle);

//   var geometry = new THREE.TetrahedronGeometry(2, 0);
//   var geom = new THREE.IcosahedronGeometry(7, 1);
//   var geom2 = new THREE.IcosahedronGeometry(15, 1);

//   var material = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     shading: THREE.FlatShading
//   });

//   for (var i = 0; i < 1000; i++) {
//     var mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
//     mesh.position.multiplyScalar(90 + (Math.random() * 700));
//     mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
//     particle.add(mesh);
//   }

//   var mat = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     shading: THREE.FlatShading
//   });

//   var mat2 = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     wireframe: true,
//     side: THREE.DoubleSide

//   });

//   var planet = new THREE.Mesh(geom, mat);
//   planet.scale.x = planet.scale.y = planet.scale.z = 16;
//   circle.add(planet);

//   var planet2 = new THREE.Mesh(geom2, mat2);
//   planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
//   skelet.add(planet2);

//   var ambientLight = new THREE.AmbientLight(0x999999 );
//   scene.add(ambientLight);

//   var lights = [];
// lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
// lights[0].position.set( 1, 0, 0 );
// lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
// lights[1].position.set( 0.75, 1, 0.5 );
// lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
// lights[2].position.set( -0.75, -1, 0.5 );
// scene.add( lights[0] );
// scene.add( lights[1] );
// scene.add( lights[2] );

//   window.addEventListener('resize', onWindowResize, false);

// };

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//   requestAnimationFrame(animate);

//   particle.rotation.x += 0.0000;
//   particle.rotation.y -= 0.0040;
//   circle.rotation.x -= 0.0020;
//   circle.rotation.y -= 0.0030;
//   skelet.rotation.x -= 0.0010;
//   skelet.rotation.y += 0.0020;
//   renderer.clear();

//   renderer.render( scene, camera )
// };

// </script>
//     <script src="build/slick/slick.min.js"></script>
//     <script>
//       const player = new Plyr("#player", {});
//     </script>
//     <script>
//       $('.single-item').slick({
//         infinite: false,
//         arrows: false,
//         dots: true
//       });
//       $('.responsive').slick({
//   infinite: false,
//   speed: 300,
//   arrows: false,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,

//         dots: true
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
//     </script>
//   </body>
// </html>

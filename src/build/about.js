import {
  logo,
  stickyFunc,
  stickyNav,
  stickyMob,
  ticketBtn,
} from "./navigation.js";
const header = document.querySelector(".header-about");
stickyFunc(stickyNav, header, ticketBtn);
stickyFunc(stickyMob, header);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const eventCard = document.querySelectorAll(".event-card");

let count = 0;
const sliding = function (count) {
  eventCard.forEach((card, index) => {
    card.style.transform = `translate(${100 * (index - count)}%)`;
  });
};
sliding(count);

leftArrow.addEventListener("click", (e) => {
  if (e.target.closest(".left-arrow")) {
    if (count < eventCard.length - 1) ++count;
    else {
      leftArrow.classList.add("disable");
      rightArrow.classList.remove("disable");
    }
    sliding(count);
  }
});

rightArrow.addEventListener("click", (e) => {
  if (e.target.closest(".right-arrow")) {
    if (count !== 0) --count;
    else {
      rightArrow.classList.add("disable");
      leftArrow.classList.remove("disable");
    }
    sliding(count);
  }
});

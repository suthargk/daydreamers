const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const eventCard = document.querySelector(".event-card");

leftArrow.addEventListener("click", (e) => {
  console.log(e);
  eventCard.style.transform = `translateX(-100%)`;
});

rightArrow.addEventListener("click", (e) => {
  console.log(e);
  eventCard.style.transform = `translateX(100%)`;
});

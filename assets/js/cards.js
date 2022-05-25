console.log("ok");

window.onload = function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((e) => {
    e.addEventListener("mouseleave", (i) => {
      e.classList.remove("card--enter");
      e.classList.add("card--leave");
    });
    e.addEventListener("mouseenter", (i) => {
      e.classList.remove("card--leave");
      e.classList.add("card--enter");
    });
  });
};

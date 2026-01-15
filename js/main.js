const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const productsToggle = document.getElementById("productsToggle");
const megaMenu = document.querySelector(".mega-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

if (productsToggle) {
  productsToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      megaMenu.classList.toggle("active");
    }
  });
}

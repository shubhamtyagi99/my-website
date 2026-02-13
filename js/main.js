/* ================= LOAD HEADER & FOOTER ================= */

function loadHeaderFooter(){

  // ⭐ detect if page is inside /products folder
  const isProductPage = window.location.pathname.includes("/products/");
  const basePath = isProductPage ? "../" : "./";

  fetch(basePath + "/partials/header.html")
  .then(res=>res.text())
  .then(data=>{
    document.getElementById("site-header").innerHTML=data;

    initMobileMenu();
    initMegaMenu();
    setActiveMenu();
  });

  fetch(basePath + "/partials/footer.html")
  .then(res=>res.text())
  .then(data=>{
    document.getElementById("site-footer").innerHTML=data;
  });
}

document.addEventListener("DOMContentLoaded", loadHeaderFooter);



/* ================= MOBILE MENU ================= */

function initMobileMenu(){
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");

  if(!hamburger || !menu) return;

  hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("open");
  });
}



/* ================= MEGA MENU (DESKTOP) ================= */

function initMegaMenu(){

  const megaItem = document.querySelector(".has-mega");
  const megaMenu = document.querySelector(".mega-menu");

  if(!megaItem || !megaMenu) return;

  // ensure menu is closed on page load
  megaItem.classList.remove("open");

  let timeout;

  // open on hover
  megaItem.addEventListener("mouseenter", ()=>{
    clearTimeout(timeout);
    megaItem.classList.add("open");
  });

  // close when mouse leaves BOTH nav item + mega menu
  megaItem.addEventListener("mouseleave", ()=>{
    timeout = setTimeout(()=>{
      megaItem.classList.remove("open");
    },200);
  });

  megaMenu.addEventListener("mouseenter", ()=>{
    clearTimeout(timeout);
  });

  megaMenu.addEventListener("mouseleave", ()=>{
    megaItem.classList.remove("open");
  });

}




/* ================= ACTIVE MENU HIGHLIGHT ================= */

function setActiveMenu(){
  const links = document.querySelectorAll(".menu a");
  const url = window.location.pathname.split("/").pop();

  links.forEach(link=>{
    if(link.getAttribute("href") === url){
      link.classList.add("active");
    }
  });
}
/* HERO SLIDER */
document.addEventListener("DOMContentLoaded", function () {

  const heroSwiper = new Swiper(".hero-slider", {
    loop: true,
    effect: "fade",
    speed: 1000,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });

});
/* ===== TANYA STYLE STICKY NAVBAR ===== */
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  const topbar = document.querySelector(".topbar");

  const stickyPoint = topbar.offsetHeight;

  if (window.scrollY > stickyPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


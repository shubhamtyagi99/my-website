/* ================= LOAD HEADER & FOOTER (FINAL) ================= */
function loadHeaderFooter(){

  const isGitHub = location.hostname.includes("github.io");
  const base = isGitHub ? "/my-website/" : "/";

  fetch(base + "partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("site-header").innerHTML = data;
    initMobileMenu();
    initMegaMenu();
    setActiveMenu();
  });

  fetch(base + "partials/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("site-footer").innerHTML = data;
  });
}

document.addEventListener("DOMContentLoaded", loadHeaderFooter);





/* ================= MOBILE MENU ================= */

function initMobileMenu(){

  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");
  const productsLink = document.getElementById("mobileProductsToggle");
  const megaParent = document.querySelector(".has-mega");

  if(!hamburger || !menu) return;

  // 🍔 Toggle mobile menu
  hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("open");
  });

  // 📱 MOBILE: Products should open products page (not accordion)
  if(productsLink){
    productsLink.addEventListener("click", (e)=>{
      if(window.innerWidth <= 992){
        // allow normal navigation → products.html
        window.location.href = "products.html";
      }
    });
  }

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

/* Highlight section when opened via anchor */
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if(hash){
    const section = document.querySelector(hash);
    if(section){
      section.style.transition = "background 0.6s ease";
      section.style.background = "#fff9e6";

      setTimeout(()=>{
        section.style.background = "";
      },1200);
    }
  }
});

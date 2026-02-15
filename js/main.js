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


  /* ⭐ NEW CODE — CLOSE MENU WHEN LINK CLICKED ⭐ */
  const megaLinks = megaMenu.querySelectorAll("a");

  megaLinks.forEach(link => {
    link.addEventListener("click", () => {
      megaItem.classList.remove("open");
    });
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

/* ===== PRODUCT PAGE ANCHOR SCROLL + HIGHLIGHT ===== */
window.addEventListener("load", () => {

  const hash = window.location.hash;
  if(!hash) return;

  const section = document.querySelector(hash);
  const header = document.querySelector(".main-header");

  if(!section) return;

  // wait for header to become sticky + fully load
  setTimeout(() => {

    const headerHeight = header ? header.offsetHeight : 100;

    // scroll with offset (prevents navbar overlap)
    const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
    window.scrollTo({ top: y, behavior: "smooth" });

    // highlight animation
    section.style.transition = "background 0.8s ease";
    section.style.background = "#fff9e6";

    setTimeout(()=>{
      section.style.background = "";
    },1500);

  }, 300);

});

// Contact form success message
(function () {
  const params = new URLSearchParams(window.location.search);
  const successBox = document.getElementById("successMessage");

  if (params.get("success") === "true" && successBox) {
    successBox.style.display = "block";

    // Clean URL after showing message
    window.history.replaceState({}, document.title, window.location.pathname);
  }
})();

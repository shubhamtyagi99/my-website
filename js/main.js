document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  fetch("partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;

      // FORCE RESET MENU STATE
      const navMenu = document.getElementById("navMenu");
      if (navMenu) {
        navMenu.classList.remove("active");
      }
      document.body.classList.remove("menu-open");

      initMenu();
      initMegaMenu(); // ✅ NEW
    });

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-footer").innerHTML = html;
    });
}

/* =========================
   MOBILE HAMBURGER MENU
   ========================= */
function initMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

document.addEventListener("DOMContentLoaded", initMenu);

/* =========================
   DESKTOP MEGA MENU (HOVER)
   ========================= */
function initMegaMenu() {
  const megaItem = document.querySelector(".has-mega");
  const megaTrigger = megaItem?.querySelector("a");
  const header = document.querySelector(".main-header");

  if (!megaItem || !megaTrigger || !header) return;

  // OPEN on hover (desktop)
  megaItem.addEventListener("mouseenter", () => {
    if (window.innerWidth > 992) {
      megaItem.classList.add("open");
    }
  });

  // CLOSE when mouse leaves the ENTIRE header
  header.addEventListener("mouseleave", () => {
    if (window.innerWidth > 992) {
      megaItem.classList.remove("open");
    }
  });

  // Prevent navigation on Products click (desktop)
  megaTrigger.addEventListener("click", (e) => {
    if (window.innerWidth > 992) {
      e.preventDefault();
    }
  });
}
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
    });

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-footer").innerHTML = html;
    });
}

function initMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !navMenu) return;

  hamburger.onclick = () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  };
}

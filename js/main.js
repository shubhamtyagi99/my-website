// LOAD HEADER & FOOTER
fetch("./partials/header.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("site-header").innerHTML = data;
  initMegaMenu();
  setActiveMenu();
  initMobileMenu();
});

fetch("./partials/footer.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("site-footer").innerHTML = data;
});


/* DESKTOP MEGA MENU */
function initMegaMenu(){
  const item=document.querySelector(".has-mega");
  const header=document.querySelector(".main-header");
  if(!item) return;

  let timeout;

  item.addEventListener("mouseenter",()=>{
    if(window.innerWidth>992){
      clearTimeout(timeout);
      item.classList.add("open");
    }
  });

  header.addEventListener("mouseleave",()=>{
    if(window.innerWidth>992){
      timeout=setTimeout(()=>item.classList.remove("open"),250);
    }
  });
}


/* MOBILE MENU + ACCORDION */
function initMobileMenu(){
  const hamburger=document.getElementById("hamburger");
  const menu=document.querySelector(".menu");
  const productsToggle=document.getElementById("mobileProductsToggle");
  const megaItem=document.querySelector(".has-mega");

  if(!hamburger) return;

  hamburger.addEventListener("click",()=>{
    menu.classList.toggle("open");
  });

  productsToggle.addEventListener("click",(e)=>{
    if(window.innerWidth<=992){
      e.preventDefault();
      megaItem.classList.toggle("mobile-open");
    }
  });
}


/* ACTIVE MENU */
function setActiveMenu(){
  const currentPage=location.pathname.split("/").pop();
  document.querySelectorAll(".menu a").forEach(link=>{
    if(link.getAttribute("href")===currentPage){
      link.classList.add("active");
    }
  });
}

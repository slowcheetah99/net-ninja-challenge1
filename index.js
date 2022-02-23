const menuItem = document.querySelector(".hamburger");
const sidebarItem = document.querySelector(".menu-container");
const hamburgerTop = menuItem.querySelector(".top");
const hamburgerMid = menuItem.querySelector(".mid");
const hamburgerBottom = menuItem.querySelector(".bottom");

menuItem.addEventListener("click", () => {
  sidebarItem.classList.toggle("open");
  hamburgerTop.classList.toggle("open");
  hamburgerMid.classList.toggle("open");
  hamburgerBottom.classList.toggle("open");
});

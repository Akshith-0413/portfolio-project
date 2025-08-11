document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger i");
  const menu = document.querySelector(".navbar-menu .menu-bar");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
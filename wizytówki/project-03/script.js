const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("open");
    menuBtnBurger.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    menuBtnBurger.classList.remove("open");
    menuOpen = false;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    menuBtnBurger.classList.remove("open");
    menuOpen = false;
  });
});

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".mobile-menu");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".nav");
  if (window.scrollY > 100) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
});

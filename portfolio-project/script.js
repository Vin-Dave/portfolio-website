const header = document.querySelector("header");
const navTop = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

function stickyToggle() {
  header.classList.toggle("sticky", window.scrollY > 100);
}

navTop.onclick = () => {
  navTop.classList.toggle("bx-x");
  navList.classList.toggle("open");
};
window.onscroll = () => {
  navTop.classList.remove("bx-x");
  navList.classList.remove("open");
};

window.addEventListener("scroll", stickyToggle);
window.addEventListener("scroll", function () {
  const navLinks = document.querySelectorAll(".nav-list a");
  const sections = document.querySelectorAll("section");

  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("focus-nav");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("focus-nav");
    }
  });
});

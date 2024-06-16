document.addEventListener("DOMContentLoaded", function () {
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
});
document
  .getElementById("contactPopupButton")
  .addEventListener("click", function () {
    document.getElementById("contactPopup").style.display = "block";
  });

document.querySelector(".close-button").addEventListener("click", function () {
  document.getElementById("contactPopup").style.display = "none";
});
window.addEventListener("scroll", function () {
  var element = document.querySelector(".animated-section");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  } else {
    element.style.opacity = "0";
    element.style.transform = "translateY(20%)";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".animated-section-left");
  var position = element.getBoundingClientRect();

  if (position.left < window.innerWidth && position.right > 0) {
    element.style.opacity = "1";
    element.style.transform = "translateX(0)";
  } else {
    element.style.opacity = "0";
    element.style.transform = "translateX(-100%)";
  }
});

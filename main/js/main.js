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

$(document).ready(function () {
  $("#carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".carousel-control.prev").click(function () {
    $("#carousel").slick("slickPrev");
  });

  $(".carousel-control.next").click(function () {
    $("#carousel").slick("slickNext");
  });
});

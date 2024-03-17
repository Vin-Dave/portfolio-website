const navBtn = document.querySelector(".toggle-menu");
const nav = document.querySelector(".navigation");
const navList = document.querySelectorAll(".navigation__box");

document.addEventListener("DOMContentLoaded", (event) => {
  function handleToggleNav() {
    nav.classList.toggle("active");
  }

  navList.forEach((li) =>
    li.addEventListener("click", (e) => {
      handleToggleNav();
    })
  );

  navBtn.addEventListener("click", handleToggleNav);
  document.addEventListener("click", () => {});
});

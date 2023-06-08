const header = document.querySelector("header");

function stickyToggle() {
  header.classList.toggle("sticky", window.scrollY > 100);
}

window.addEventListener("scroll", stickyToggle);

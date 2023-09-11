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

function updateCountdown() {
  let currentDate = new Date();
  let countdownElements = document.getElementsByClassName("countdown");

  for (let i = 0; i < countdownElements.length; i++) {
    let countdownElement = countdownElements[i];
    let targetDate = new Date(countdownElement.dataset.targetDate);

    let difference = currentDate - targetDate;
    let years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );

    let countdownText = "";

    if (years === 1) {
      countdownText += "1 rok";
    } else if (years > 1) {
      countdownText += years + " lata";
    }

    if (months === 1) {
      countdownText += " 1 miesiąc";
    } else if (months > 1 && months < 5) {
      countdownText += " " + months + " months";
    } else if (months >= 5 || months === 0) {
      countdownText += " " + months + " months";
    }

    countdownElement.innerHTML = countdownText;
  }
}

updateCountdown();

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

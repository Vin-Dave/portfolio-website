document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__header");
    header.addEventListener("click", () => {
      item.classList.toggle("active");
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  // Fade in elements on scroll
  const fadeInUpElements = document.querySelectorAll(".accordion__item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInUpElements.forEach((element) => {
    observer.observe(element);
  });
});

// Additional CSS for scroll animation
const style = document.createElement("style");
style.innerHTML = `
    .fadeInUp {
        animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

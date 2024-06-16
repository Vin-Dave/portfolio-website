document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider__slide");
  let currentIndex = 0;
  const maxIndex = slides.length - 1;
  const prevButton = document.querySelector(".slider__button--prev");
  const nextButton = document.querySelector(".slider__button--next");
  const paginationContainer = document.querySelector(".slider__pagination");
  let autoSlideInterval = setInterval(nextSlide, 3000);
  let userInteracting = false;

  function createPagination() {
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("slider__pagination__dot");
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlidePosition();
        userInteracted();
      });
      paginationContainer.appendChild(dot);
    });
  }

  function updatePagination() {
    const dots = document.querySelectorAll(".slider__pagination__dot");
    dots.forEach((dot, index) => {
      dot.style.opacity = index === currentIndex ? "1" : "0.5";
    });
  }

  function userInteracted() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function nextSlide() {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
    updatePagination();
  }

  function updateSlidePosition() {
    const sliderContainer = document.querySelector(".slider__container");
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updatePagination();
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    updateSlidePosition();
    userInteracted();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
    userInteracted();
  });

  let touchstartX = 0;
  let touchendX = 0;

  document.querySelector(".slider").addEventListener(
    "touchstart",
    (e) => {
      touchstartX = e.changedTouches[0].screenX;
      e.preventDefault();
    },
    false
  );

  document.querySelector(".slider").addEventListener(
    "touchend",
    (e) => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
      e.preventDefault();
    },
    false
  );

  function handleGesture() {
    if (touchendX < touchstartX - 50) nextButton.click();
    if (touchendX > touchstartX + 50) prevButton.click();
  }

  createPagination();
  updatePagination();
});

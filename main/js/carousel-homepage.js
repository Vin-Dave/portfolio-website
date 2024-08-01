$(document).ready(function () {
  const $carousel = $("#carousel");
  const $carouselImage = $("#carouselImage");
  const $thumbnails = $(".carousel__thumbnails");
  let images = [];
  let currentIndex = 0;
  let touchStartX = 0;

  $(".section__btn").on("click", function (e) {
    e.preventDefault();
    images = $(this).data("images").split(",");
    currentIndex = 0;
    showImage(currentIndex);
    populateThumbnails();
    $carousel.removeClass("carousel--hidden");
  });

  $("#closeCarousel").on("click", function () {
    $carousel.addClass("carousel--hidden");
  });

  $(".carousel__control--prev").on("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  $(".carousel__control--next").on("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $carousel.addClass("carousel--hidden");
    }
  });

  // Zamknięcie karuzeli po kliknięciu na tło
  $carousel.on("click", function (e) {
    if ($(e.target).is("#carousel, .carousel__image")) {
      $carousel.addClass("carousel--hidden");
    }
  });

  // Obsługa swipe
  $carousel.on("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  $carousel.on("touchend", function (e) {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (touchEndX - touchStartX > 50) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    showImage(currentIndex);
  });

  function showImage(index) {
    $carouselImage.fadeOut(300, function () {
      $carouselImage.attr("src", "./slider/" + images[index]);
      $carouselImage.fadeIn(300);
      updateThumbnails(index);
    });
  }

  function populateThumbnails() {
    $thumbnails.empty();
    images.forEach((image, index) => {
      const $thumbnail = $("<img>", {
        src: "./slider/" + image,
        class: "thumbnail" + (index === currentIndex ? " active" : ""),
        click: function () {
          showImage(index);
        },
      });
      $thumbnails.append($thumbnail);
    });
  }

  function updateThumbnails(activeIndex) {
    $thumbnails.find(".thumbnail").removeClass("active");
    $thumbnails.find(".thumbnail").eq(activeIndex).addClass("active");
  }
});

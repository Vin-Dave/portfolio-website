addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const sections = document.querySelectorAll("section");

  document.addEventListener("mousewheel", function (e) {
    console.log(e.wheelDelta);
  });
});

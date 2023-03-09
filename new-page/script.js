const projects = document.querySelectorAll(".project");

let currentProject = 0;
let timeout;

function showProject(index) {
  projects[currentProject].classList.remove("active");
  projects[index].classList.add("active");
  currentProject = index;
  timeout = setTimeout(() => {
    showProject((index + 1) % projects.length);
  }, 5000);
}

showProject(currentProject);

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseover", () => {
    clearTimeout(timeout);
  });
  projects[i].addEventListener("mouseout", () => {
    timeout = setTimeout(() => {
      showProject((currentProject + 1) % projects.length);
    }, 2000);
  });
}

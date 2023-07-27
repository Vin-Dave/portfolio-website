const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA", "dwa"];
const messages = ["super", "działa!", "aaa"];

const showMessage = (e) => {
  passwords.forEach((pass, index) => {
    if (e.target.value.toLowerCase() === pass.toLowerCase()) {
      console.log("ok");

      div.textContent = messages[index];
    } else {
      console.log("Nie działa");
    }
  });
};

input.addEventListener("input", showMessage);

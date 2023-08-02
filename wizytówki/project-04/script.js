const btn = document.querySelector(".generate");
const sections = document.querySelector("section");
const number = 101;
const char = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";
const charNum = 10;

function generateCode() {
  for (let i = 0; i < number; i++) {
    let code = "";
    for (let i = 0; i < charNum; i++) {
      const index = Math.floor(Math.random() * char.length);
      code += char[index];
    }
    const div = document.createElement("div");
    div.textContent = code;
    sections.append(div);
  }
}
btn.addEventListener("click", generateCode);

const arrName = [];
const name123 = document.querySelector("input");
const section = document.querySelector("section");
const div = document.createElement("div");

function pushName(e) {
  e.preventDefault();
  const addName = name123.value;

  if (name123.value.length && arrName) {
    for (nams of arrName) {
      if (nams === addName) {
        console.log("1=1");
        return;
      }
    }

    arrName.push(addName);
    document.body.append(div);
    div.textContent += `${addName}, `;
    name123.value = "";
  } else {
    console.log("element istnieje!");
  }
}

document.querySelector("button").addEventListener("click", pushName);

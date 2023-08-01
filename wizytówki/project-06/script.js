// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->
const arrEmpty = [];
const addAdvice = document.querySelector(".add");
const putText = document.querySelector("input");
const removeArr = document.querySelector(".clean");
const showAddv = document.querySelector(".showAdvice");
const showAllAddv = document.querySelector(".showOptions");
const h1 = document.querySelector("h1");

removeArr.addEventListener("click", (e) => {
  e.preventDefault();
  arrEmpty.length = 0;
  console.log(arrEmpty);
  alert(`usunięto metody`);
});

addAdvice.addEventListener("click", (e) => {
  e.preventDefault();

  const newArr = putText.value;

  if (newArr) {
    for (newAdds of arrEmpty) {
      if (newAdds === newArr) return;
    }
    arrEmpty.push(newArr);
    console.log(arrEmpty);
    alert(`dodano metodę ${newArr}`);
  } else return;
});

showAllAddv.addEventListener("click", () => {
  alert(`${arrEmpty},`);
});

showAddv.addEventListener("click", () => {
  let randomText = Math.floor(Math.random() * arrEmpty.length);
  console.log(randomText);
  h1.textContent = arrEmpty[randomText];
});

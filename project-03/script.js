const cells = document.querySelectorAll(".cell");
let currentPlayer = "x";
let gameWon = false;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.innerHTML && !gameWon) {
      cell.innerHTML = currentPlayer;
      cell.classList.add(currentPlayer);

      if (checkForWinner(currentPlayer)) {
        alert(currentPlayer.toUpperCase() + " won!");
        gameWon = true;
      } else if (checkForTie()) {
        alert("It's a tie!");
        gameWon = true;
      } else {
        currentPlayer = currentPlayer === "x" ? "o" : "x";
      }
    }
  });
});

function checkForWinner(player) {
  return (
    check(0, 1, 2, player) ||
    check(3, 4, 5, player) ||
    check(6, 7, 8, player) ||
    check(0, 3, 6, player) ||
    check(1, 4, 7, player) ||
    check(2, 5, 8, player) ||
    check(0, 4, 8, player) ||
    check(2, 4, 6, player)
  );
}

function check(a, b, c, player) {
  return (
    cells[a].innerHTML === player &&
    cells[b].innerHTML === player &&
    cells[c].innerHTML === player
  );
}

function checkForTie() {
  return Array.from(cells).every((cell) => cell.innerHTML);
}

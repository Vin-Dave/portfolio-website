function flipCoin() {
  const result = Math.floor(Math.random() * 2);

  const coin = document.getElementById("coin");
  coin.className = result === 0 ? "coin eagle" : "coin tail";
}

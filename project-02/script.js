// pobranie elementów z dokumentu
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

// inicjalizacja koszyka
let cart = [];

// dodanie obsługi kliknięcia do przycisków "Dodaj do koszyka"
productList.addEventListener("click", addToCart);

// dodanie obsługi kliknięcia do przycisku "Wyczyść koszyk"
clearCartBtn.addEventListener("click", clearCart);

// funkcja dodająca produkt do koszyka
function addToCart(event) {
  if (event.target.classList.contains("add-to-cart")) {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;
    const item = cart.find((item) => item.name === name);
    if (item) {
      item.quantity++;
    } else {
      cart.push({
        name: name,
        price: price,
        quantity: 1,
      });
    }
    showCart();
  }
}

// funkcja usuwająca produkt z koszyka
function removeFromCart(event) {
  if (event.target.classList.contains("remove-from-cart")) {
    const name = event.target.dataset.name;
    const item = cart.find((item) => item.name === name);
    if (item.quantity === 1) {
      cart = cart.filter((item) => item.name !== name);
    } else {
      item.quantity--;
    }
    showCart();
  }
}

// funkcja czyszcząca koszyk
function clearCart() {
  cart = [];
  showCart();
}

// funkcja wyświetlająca zawartość koszyka
function showCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = ` <span>${item.name}</span> <span>${item.quantity} x ${item.price} zł</span> <button class="remove-from-cart" data-name="${item.name}">Usuń</button>`;
    cartList.appendChild(li);
  });
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  cartTotal.innerHTML = `Łącznie: ${total} zł;`;
}

// inicjalizacja listy produktów
const products = [
  {
    name: "Kawa",
    price: 5,
  },
  {
    name: "Herbata",
    price: 3,
  },
  {
    name: "Chleb",
    price: 2.5,
  },
  {
    name: "Mleko",
    price: 1.8,
  },
];

// wygenerowanie listy produktów
products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("product");
  productList.appendChild(div);
});

// wyświetlenie zawartości koszyka
showCart();

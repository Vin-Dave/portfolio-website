import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

import ShoppingCartProvider from "./ShoppingCartProvider/ShoppingCartProvider.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Shop />
    </ShoppingCartProvider>
  );
}

export default App;

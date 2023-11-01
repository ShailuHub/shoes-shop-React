import React from "react";
import AddProductForm from "./components/ProductForm/AddProductForm";
import ProductItems from "./components/ProductList/ProductItems";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AddProductForm />
      <ProductItems />
      <Cart />
    </React.Fragment>
  );
}

export default App;

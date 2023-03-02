import { useState } from "react";
import "./Service.module.css";
import Header from "../componentCart/Layout/Header";
import Meals from '../componentCart/Meals/AvailableMeal'
import Cart from "../componentCart/Cart/Cart";
import CartProvider from "../store/CartProvider";


function Service() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
       <Meals/>
      </main>
    </CartProvider>
  );
}

export default Service;
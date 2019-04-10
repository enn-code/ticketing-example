import React from "react";

import Indicator from "../components/checkout/indicator.checkout";
import Products from "../components/checkout/products.checkout";

const CheckoutView = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <Indicator cartQuantity={2} />
      <Products />
    </div>
  );
};
export default CheckoutView;

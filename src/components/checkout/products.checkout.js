import React from "react";
import SmallButton from "../shared/button/small.button";

const Products = () => {
  const quantity = 1;
  return (
    <div>
      Here are some products<SmallButton>-</SmallButton> {quantity}{" "}
      <SmallButton>+</SmallButton>
    </div>
  );
};

export default Products;

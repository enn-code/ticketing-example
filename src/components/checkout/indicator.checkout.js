import React from "react";

const Indicator = ({ cartQuantity }) => {
  return <div>[{cartQuantity | 0}]</div>;
};

export default Indicator;

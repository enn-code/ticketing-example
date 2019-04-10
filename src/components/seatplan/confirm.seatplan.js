import React from "react";
import { withRouter } from "react-router";

import { ActionButton } from "../shared/button/themed.button";

const handleClick = history => {
  history.push("/checkout");
  console.log("clicked");
};

const ConfirmSeats = props => {
  const { history } = props;
  return (
    <ActionButton handleClick={handleClick(history)}>To checkout</ActionButton>
  );
};

export default ConfirmSeats;

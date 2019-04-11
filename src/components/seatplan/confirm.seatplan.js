import React from "react";
import { withRouter } from "react-router-dom";

import { ActionButton } from "../shared/button/themed.button";

const handleClick = (nextUrl, history) => {
  history.push(nextUrl);
};

const ConfirmSeats = props => {
  const { history } = props;
  return (
    <ActionButton
      nextUrl="/checkout"
      history={history}
      handleClick={handleClick}
    >
      To checkout
    </ActionButton>
  );
};

export default withRouter(ConfirmSeats);

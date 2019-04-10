import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const SmallButton = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default SmallButton;

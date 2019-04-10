import React from "react";
import styled from "styled-components";

const ThemedButton = styled.button`
  background-color: ${props => theme[props.theme].foreground};
`;

export const ActionsButton = props => {
  return <ThemedButton>{props.children}</ThemedButton>;
};

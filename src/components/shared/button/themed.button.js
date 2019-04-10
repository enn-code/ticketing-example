import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ThemeConsumer } from "../../../providers/theme.context";
import Colours from "../../../styles/colours.styles";

const ThemedButton = styled.button`
  background-color: ${props => Colours.theme[props.theme].foreground};
`;

export const ActionButton = props => {
  const { handleClick, nextUrl, history } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ThemedButton
          theme={theme}
          onClick={() => handleClick(nextUrl, history)}
        >
          {props.children}
        </ThemedButton>
      )}
    </ThemeConsumer>
  );
};

export const LinkButton = props => {
  const { nextUrl } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Link to={nextUrl}>
          <ThemedButton theme={theme}>{props.children}</ThemedButton>
        </Link>
      )}
    </ThemeConsumer>
  );
};

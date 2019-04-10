import React from "react";
import styled from "styled-components";

import { ThemeConsumer } from "../../../providers/theme.context";
import Colours from "../../../styles/colours.styles";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  min-height: 100px;
  width: 100%;
  background-color: ${props => Colours.theme[props.theme].background};
`;

const Footer = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => <FooterWrapper theme={theme} />}
    </ThemeConsumer>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

// Global Styles.
const {
  colors: { mainBlue },
} = GlobalStyles;

const Navbar = styled.nav`
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Navigation = () => {
  return (
    <Navbar>
      <h1>Hiragana - Katakana</h1>
    </Navbar>
  );
};

export default Navigation;

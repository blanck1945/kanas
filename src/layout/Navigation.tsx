import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: red;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const Navigation = () => {
  return (
    <Navbar>
      <h1>Hiragana - Katakana</h1>
    </Navbar>
  );
};

export default Navigation;

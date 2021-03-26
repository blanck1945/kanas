import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import navLinks from "../data/NavLinks";
import GlobalStyles from "../styles/GlobalStyles";

// Global Styles.
const {
  font: { font55, font40 },
  colors: { mainBlue, navLinkGray },
} = GlobalStyles;

// Main Navigation bar.
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 129px;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  padding-left: 10px;
`;

// Kana Logo.
const KanaLogo = styled.h1`
  font-size: ${font55};
`;

// Nav Links div.
const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Nav Links. (Router)
const PageNavLink = styled(NavLink)`
  font-size: ${font40};
  color: ${navLinkGray};
  text-decoration: none;
`;

const Navigation = () => {
  const navLinksDis = navLinks.map((link) => {
    return <PageNavLink to={link.path}>{link.header} </PageNavLink>;
  });

  return (
    <Navbar>
      <KanaLogo>Learn Kanas</KanaLogo>
      <NavLinks>{navLinksDis}</NavLinks>
    </Navbar>
  );
};

export default Navigation;

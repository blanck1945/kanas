import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import styled from "styled-components";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Main = styled.main`
  width: 100%;
  height: 80vh;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

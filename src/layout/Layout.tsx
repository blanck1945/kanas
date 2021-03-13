import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Learn Hiragana - Katakana</title>
        <link
          rel="icon"
          type="image/png"
          href="https://pics.freeicons.io/uploads/icons/png/11726202051579150933-512.png"
        />
      </Helmet>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

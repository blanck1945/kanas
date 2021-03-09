import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";

interface ButtonsInterface {
  children: JSX.Element | JSX.Element[] | string;
  func?: any;
  width?: string;
  margin?: string;
}

const Buttons = ({ children, func, width, margin }: ButtonsInterface) => {
  // Global Styles.
  const {
    colors: { mainBlue, mainGray },
  } = GlobalStyles;

  const Button = styled.button`
    height: 45px;
    width: ${width};
    background-color: ${mainGray};
    color: ${mainBlue};
    border: 1px solid ${mainBlue};
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: auto;
    margin-top: 40px;
    border-radius: 8px;
  `;

  return <Button onClick={(e) => func(e)}>{children}</Button>;
};

export default Buttons;

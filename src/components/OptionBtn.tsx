import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

interface OptionBtnProps {
  header?: string;
  exit?: boolean;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  children: string;
}

// Global Styles.
const {
  colors: { mainBlue, mainGray },
} = GlobalStyles;

const OptionBtn = ({
  header,
  children,
  value,
  setState,
  exit,
}: OptionBtnProps) => {
  const Button = styled.span`
    height: 25px;
    width: ${exit ? "150px" : "90px"};
    background-color: ${mainGray};
    color: ${mainBlue};
    border: 1px solid ${mainBlue};
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    margin: ${exit ? "auto" : ""};
    margin-top: ${exit ? "20px" : "0px"};
    border-radius: 8px;
  `;

  return <Button onClick={() => setState(value)}>{children}</Button>;
};

export default OptionBtn;

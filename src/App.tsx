import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import OptionBtn from "./components/OptionBtn";
import styled from "styled-components";
import KanaRow from "./components/KanaRow";

const AppStyle = styled.div`
  box-sizing: border-box;
  margin: 0;
`;

// Hiragana && Katakana buttons.
const ButtonDiv = styled.div`
  height: 100px;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// GeneralDiv.
const GeneralDiv = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
`;

const App: any = () => {
  // Hook to handle app state.
  const [workState, setWorkState] = useState<string>("no-work");

  // Styled div.
  const ContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4e4e4;
  `;

  // Default state of Application.
  const NoWorkState = () => {
    return (
      <ContainerStyled>
        <h3>Please, select one Kana to start.</h3>
      </ContainerStyled>
    );
  };

  // Hiragana/Katakana display Row.
  const KanaContainerDis = (props: any) => {
    return <KanaRow />;
  };

  // Close Button Component.
  const closeBtn = () => {
    if (workState === "working") {
      const btnFunc = {
        value: "no-work",
        setState: setWorkState,
      };
      return (
        <OptionBtn exit {...btnFunc}>
          Exit Lesson
        </OptionBtn>
      );
    }
  };

  // Buttons configuration
  const buttonsConfig = {
    btnFuncHiragana: {
      value: "working",
      alphabet: "hiragana",
      setState: setWorkState,
    },
    btnFuncKatakana: {
      value: "working",
      alphabet: "katakana",
      setState: setWorkState,
    },
  };

  return (
    <AppStyle>
      <ButtonDiv>
        <OptionBtn {...buttonsConfig.btnFuncHiragana}>Hiragana</OptionBtn>
        <OptionBtn {...buttonsConfig.btnFuncKatakana}>Katakana</OptionBtn>
      </ButtonDiv>
      <GeneralDiv>
        {workState === "no-work" ? (
          <NoWorkState />
        ) : workState === "hiragana" ? (
          <KanaContainerDis setWorkState={setWorkState} />
        ) : (
          <KanaContainerDis />
        )}
      </GeneralDiv>
      {closeBtn()}
    </AppStyle>
  );
};

export default hot(App);

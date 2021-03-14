import { useState } from "react";
import OptionBtn from "../components/OptionBtn";
import KanaRow from "../components/KanaRow";
import styled from "styled-components";

const AppStyle = styled.div``;

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

const DashPage = () => {
  // Hook to handle app state.
  const [workState, setWorkState] = useState<string>("no-work");

  // Hook to handle alphabet selection.
  const [alphabet, setAlphabet] = useState<string>("none");

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
    return <KanaRow kana={alphabet} />;
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
      setAlphabet: setAlphabet,
    },
    btnFuncKatakana: {
      value: "working",
      alphabet: "katakana",
      setState: setWorkState,
      setAlphabet: setAlphabet,
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

export default DashPage;

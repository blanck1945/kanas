import React, { useState } from "react";
import "./scss/main.scss";
import { hot } from "react-hot-loader/root";
import OptionBtn from "./components/OptionBtn";
import styled from "styled-components";
import KanaRow from "./components/KanaRow";

// Hiragana && Katakana buttons.
const ButtonDiv = styled.div`
  height: 100px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const GeneralDiv = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
`;

const App: any = () => {
  const [workState, setWorkState] = useState<string>("no-work");
  const [amountOfKanas, setAmountOfKanas] = useState<number>(9);

  // Styled div.
  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4e4e4;
  `;

  const kanaDis = () => {
    const n = 1;
    return [...Array(n)].map((e, i) => (
      <KanaRow amountOfKanas={amountOfKanas} key={i} />
    ));
  };

  const NoWorkState = () => {
    return (
      <Container>
        <h3>Please, select one Kana to start.</h3>
      </Container>
    );
  };

  const KanaContainerDis = () => {
    return <KanaRow amountOfKanas={3} />;
  };

  const btnFunc = {
    value: "working",
    setState: setWorkState,
  };

  const closeBtn = () => {
    if (workState == "working") {
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

  return (
    <div className="App">
      <ButtonDiv>
        <OptionBtn {...btnFunc}>Hiragana</OptionBtn>
        <OptionBtn {...btnFunc}>Katakana</OptionBtn>
      </ButtonDiv>
      <GeneralDiv>
        {workState == "no-work" ? <NoWorkState /> : <KanaContainerDis />}
      </GeneralDiv>
      {closeBtn()}
    </div>
  );
};

export default hot(App);

import React, { useState } from "react";
import "./scss/main.scss";
import { hot } from "react-hot-loader/root";
import hiragana from "./data/hiragana";
import OptionBtn from "./components/OptionBtn";
import styled from "styled-components";

const ButtonDiv = styled.div`
  height: 100px;
  width: 20%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const GeneralDiv = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
  background-color: gold;
`;

const App: any = () => {
  const [workState, setWorkState] = useState<string>("no-work");

  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: ${workState === "no-work" ? "flex" : "grid"};
    align-items: center;
    justify-content: center;
    background-color: ${workState === "no-work" ? "gold" : "blue"};
  `;

  const hiraganaDis = hiragana.vowels.map(({ romanji, kana }) => {
    return (
      <div>
        <h3>{romanji} </h3>
        <h3>{kana} </h3>
      </div>
    );
  });

  const workDis = () => {
    switch (workState) {
      case "no-work":
        return (
          <Container>
            <h3>Please, select one Kana to start.</h3>
          </Container>
        );
      case "working":
        return (
          <Container>
            <h3>Please complete the chart.</h3>
          </Container>
        );
    }
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
      <GeneralDiv>{workDis()}</GeneralDiv>
      {closeBtn()}
    </div>
  );
};

export default hot(App);

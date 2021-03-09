import React, { useEffect, useState } from "react";
import styled, { StyledInterface } from "styled-components";
import { Formik, Form, Field } from "formik";
import HiraganaForm from "../form/HiraganaForm";
import KanaLabel from "./KanaLabel";
import JapaneseAlphabet from "../data/Japanese";
import Buttons from "./atoms/Buttons";
import { KanaInterface } from "../data/kanaInterface";

// Kanas Styled Tags.
const KanaRowDiv = styled.div`
  margin: 8px 35px;
  display: flex;
  flex-direction: row;
`;

// Kana styles input.
const KanaInput = styled.input`
  width: 30px;
  height: 25px;
  margin: 0px 8px;
  margin-top: 3px;
`;

// Single Kana Div.
const KanaDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

// Responses Div.
const ResponsesDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 25px;
  justify-content: space-evenly;
`;

interface KanaRowInterface {
  amountOfKanas: number;
}

const KanaRow = ({ amountOfKanas }: KanaRowInterface) => {
  // Hiragana Alphabet.
  const { allHiragana } = JapaneseAlphabet;

  // Hook to track count.
  const [count, setCount] = useState<number>(0);

  const [responseReport, setResponseReport] = useState<boolean>(false);

  // Hook to handler user responses.
  const [kanaOptions, setKanaOptions] = useState({
    res1: "",
    res2: "",
    res3: "",
  });

  // Hook to handle random hiragana.
  const [word, setWord] = useState<any>({
    word1: "",
    word2: "",
    word3: "",
  });

  const [responses, setResponses] = useState({
    response1: "",
    response2: "",
    response3: "",
  });

  // Function to handler inputs
  const setInputValue = (e: any) => {
    setKanaOptions({
      ...kanaOptions,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handler submitting.
  const getFormValues = (e: any) => {
    e.preventDefault();
    setResponses({
      response1:
        word.word1.romanji == kanaOptions.res1 ? "Correcto" : "Incorrecto",
      response2:
        word.word2.romanji == kanaOptions.res2 ? "Correcto" : "Incorrecto",
      response3:
        word.word3.romanji == kanaOptions.res3 ? "Correcto" : "Incorrecto",
    });
    setResponseReport(true);
  };

  useEffect(() => {
    // Random hiragana for the label
    const getHiragana = () => {
      setWord({
        word1: allHiragana[Math.floor(Math.random() * allHiragana.length)],
        word2: allHiragana[Math.floor(Math.random() * allHiragana.length)],
        word3: allHiragana[Math.floor(Math.random() * allHiragana.length)],
      });
    };

    getHiragana();
  }, [count]);

  const refreshPage = () => {
    setCount(count + 1);
    setResponseReport(false);
    setKanaOptions({
      res1: "",
      res2: "",
      res3: "",
    });
  };

  // Kanas Columns.
  return (
    <div>
      <KanaRowDiv>
        <KanaDiv>
          <div>{word?.word1.kana}</div>
          <KanaInput
            name="res1"
            value={kanaOptions.res1}
            onChange={(e) => setInputValue(e)}
          />
        </KanaDiv>
        <KanaDiv>
          <div>{word?.word2.kana}</div>
          <KanaInput
            name="res2"
            value={kanaOptions.res2}
            onChange={(e) => setInputValue(e)}
          />
        </KanaDiv>
        <KanaDiv>
          <div>{word?.word3.kana}</div>
          <KanaInput
            name="res3"
            value={kanaOptions.res3}
            onChange={(e) => setInputValue(e)}
          />
        </KanaDiv>
      </KanaRowDiv>
      {responseReport ? (
        <ResponsesDiv>
          <h4>{responses.response1}</h4>
          <h4>{responses.response2}</h4>
          <h4>{responses.response3}</h4>
        </ResponsesDiv>
      ) : null}
      <Buttons width="80px" func={refreshPage}>
        Refresh
      </Buttons>
      <Buttons width="80px" func={getFormValues}>
        Press
      </Buttons>
    </div>
  );
};

export default KanaRow;

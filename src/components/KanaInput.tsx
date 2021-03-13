import React, { useMemo, useState } from "react";
import styled from "styled-components";

// Single Kana Div.
const KanaDivStyle = styled.div`
  display: flex;
  width: 10%;
  flex-direction: column;
  align-items: center;
`;

// Kana styles input.
const KanaInputStyle = styled.input`
  width: 30px;
  height: 25px;
  margin: 0px 8px;
  margin-top: 3px;
`;

// Kana Input Interface.
interface KanaInputInterface {
  kanaOptions: any;
  handler: any;
  responseReport?: boolean;
}

const KanaInput = ({ kanaOptions, responseReport }: KanaInputInterface) => {
  // Properies from Kana form.
  const { word, name, value } = kanaOptions;

  // Function to get on Kana.
  const memo = useMemo(() => {
    return word();
  }, [word]);

  // Hook to handler user response and response value.
  const [input, setInput] = useState<any>({
    res: value,
    response: "",
  });

  // Function to updated user response value.
  const setInputValue = (e: any) => {
    setInput({
      res: e.target.value,
      response: memo.romanji === e.target.value ? "Correcto" : "Incorrecto",
    });
  };

  // Responses Div.
  const ResponseStyle = styled.h4`
    margin-top: 12px;
    padding: 3px 6px;
    color: white;
    border-radius: 5px;
    background-color: ${input.response === "Correcto" ? "green" : "red"};
  `;

  return (
    <KanaDivStyle>
      <div>{memo.kana}</div>
      <KanaInputStyle
        name={name}
        value={input.res}
        onChange={(e) => setInputValue(e)}
      />
      {responseReport && <ResponseStyle>{input.response}</ResponseStyle>}
    </KanaDivStyle>
  );
};

export default KanaInput;

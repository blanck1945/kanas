import React from "react";
import StartButton from "../atoms/StartButton";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";

const {
  colors: { flagCenter },
  font: { font65 },
} = GlobalStyles;

// Call to action div.
const CallToActionStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Japanese Flag ackground.
const FlagBg = styled.div`
  width: 512px;
  margin: auto;
  height: 265px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

// Japanese Flag center.
const FlagCenter = styled.div`
  display: block;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: ${flagCenter};
`;

// Hiragana call div.
const HiraganaCall = styled.div`
  margin: auto;
`;

// Hiragana h4.
const HiraganaTag = styled.h4`
  font-size: ${font65};
`;

// Call to Actions interface.
interface CallToActionProps {
  flag?: boolean;
  write?: boolean;
  start?: boolean;
}

const CallToAction = ({ flag, write, start }: CallToActionProps) => {
  const FlagDis = () => {
    return (
      <FlagBg>
        <FlagCenter />
      </FlagBg>
    );
  };

  const WriteDis = () => {
    return (
      <HiraganaCall>
        <HiraganaTag>ひらがな</HiraganaTag>
        <HiraganaTag>カタカナ</HiraganaTag>
        <HiraganaTag>漢字</HiraganaTag>
      </HiraganaCall>
    );
  };

  return (
    <CallToActionStyled>
      {flag && <FlagDis />}
      {write && <WriteDis />}
      <StartButton />
    </CallToActionStyled>
  );
};

export default CallToAction;

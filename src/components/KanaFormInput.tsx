import React from "react";
import HiraganaForm from "../form/HiraganaForm";
import KatakanaForm from "../form/KatakanaForm";
import WordForm from "../form/WordForm";
import KanaInput from "./KanaInput";

interface KanaFormInputsInterface {
  alphabet: string;
  responseReport: boolean;
}

const KanaFormInputs = ({
  alphabet,
  responseReport,
}: KanaFormInputsInterface) => {
  // Hook to handler form fields and props - Hiragana.
  const { hiraganaForm, setHirganaForm } = HiraganaForm();

  // Hook to handler form fields and props - Katakana.
  const { katakanaForm, setKatakanaForm } = KatakanaForm();

  // Hook to handler form fields and props - Words.
  const { wordForm, setWordForm } = WordForm();

  // Function to handler inputs
  const setInputValue = (e: any) => {
    switch (alphabet) {
      case "hiragana":
        setHirganaForm({
          ...hiraganaForm,
          [e.target.name]: e.target.value,
        });
        break;
      case "katakana":
        setKatakanaForm({
          ...katakanaForm,
          [e.target.name]: e.target.value,
        });
        break;
      case "word":
        setWordForm({
          ...wordForm,
          [e.target.name]: e.target.value,
        });
        break;
      default:
        return "no-alpabhet";
    }
  };

  // Kanas Inputs hiragana.
  const hiraganaInput = hiraganaForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        setInputValue={setInputValue}
        responseReport={responseReport}
      />
    );
  });
  // Kanas Inputs katakana.
  const katakanaInput = katakanaForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        setInputValue={setInputValue}
        responseReport={responseReport}
      />
    );
  });
  // Word Inputs.
  const wordInput = wordForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        words={true}
        setInputValue={setInputValue}
        responseReport={responseReport}
      />
    );
  });

  return (
    <div>
      {alphabet === "hiragana"
        ? hiraganaInput
        : alphabet === "katakana"
        ? katakanaInput
        : wordInput}
    </div>
  );
};

export default KanaFormInputs;

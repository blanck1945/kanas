import React, { useEffect, useState } from "react";
import JapaneseAlphabet from "../data/Japanese";
import { KanaInterface } from "../data/kanaInterface";

const KanaLabel = () => {
  const { allHiragana } = JapaneseAlphabet;
  const [word, setWord] = useState<KanaInterface | undefined>(undefined);

  useEffect(() => {
    // Random hiragana for the label
    const getHiragana = () => {
      setWord(allHiragana[Math.floor(Math.random() * allHiragana.length)]);
    };

    getHiragana();
  }, []);

  return <div>{word?.kana}</div>;
};

export default KanaLabel;

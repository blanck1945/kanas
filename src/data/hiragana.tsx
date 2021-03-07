import { KanaInterface } from "./kanaInterface";

export interface HiraganaInterface {
  vowels: KanaInterface[];
}

const hiragana: HiraganaInterface = {
  vowels: [
    {
      romanji: "a",
      kana: "あ",
      sound: "",
    },
    {
      romanji: "i",
      kana: "い",
      sound: "",
    },
    {
      romanji: "u",
      kana: "う",
      sound: "",
    },
    {
      romanji: "e",
      kana: "え",
      sound: "",
    },
    {
      romanji: "o",
      kana: "お",
      sound: "",
    },
  ],
};

export default hiragana;

import { KanaInterface } from "../interfaces/Kana";
import hiragana from "./hiragana";
import katakana from "./katakana";
import wordsAlphabet from "./words";

export interface JapaneseAlphabetInterface {
    allHiragana: KanaInterface[],
    allKatakana: KanaInterface[],
    allWords: any
}

const JapaneseAlphabet:JapaneseAlphabetInterface = {
    allHiragana:hiragana,
    allKatakana: katakana,
    allWords: wordsAlphabet
}

export default JapaneseAlphabet;
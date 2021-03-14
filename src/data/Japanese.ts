import hiragana from "./hiragana";
import { KanaInterface } from "./kanaInterface";
import katakana from "./katakana";

export interface JapaneseAlphabetInterface {
    allHiragana: KanaInterface[],
    allKatakana: KanaInterface[]
}

const JapaneseAlphabet:JapaneseAlphabetInterface = {
    allHiragana:hiragana,
    allKatakana: katakana
}

export default JapaneseAlphabet;
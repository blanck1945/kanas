import hiragana from "./hiragana";
import { KanaInterface } from "./kanaInterface";

export interface JapaneseAlphabetInterface {
    allHiragana: KanaInterface[],
    allKatakana: any
}

const JapaneseAlphabet:JapaneseAlphabetInterface = {
    allHiragana:hiragana,
    allKatakana: ""
}

export default JapaneseAlphabet;
function upperCaseTheFirstCharToTheWord(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

export function camelCaseConverter(text: string) {
    let splitterRegex = /[ _-]/;
    let words = text.split(splitterRegex);
    let word = words[0];
    words[0] = upperCaseTheFirstCharToTheWord(word)
    return words.join("");
}
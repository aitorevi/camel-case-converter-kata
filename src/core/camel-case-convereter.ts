function upperCaseTheFirstCharToTheWords(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

export function camelCaseConverter(text: string) {
    let splitterRegex = /[ _-]/;
    let words = text.split(splitterRegex);

    const wordsToUpperCase = words.map(word =>
        upperCaseTheFirstCharToTheWords(word)
    )

    return wordsToUpperCase.join("");
}
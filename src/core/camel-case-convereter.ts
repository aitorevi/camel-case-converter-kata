
export function camelCaseConverter(text: string): string {
    const words: string[] = text.split(/[ _-]/);
    const wordsToUpperCase: string[] = words.map(word => upperCaseTheFirstCharToTheWords(word))

    return wordsToUpperCase.join("");
}
function upperCaseTheFirstCharToTheWords(word: string): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

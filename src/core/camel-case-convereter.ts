export function camelCaseConverter(text: string) {
    let splitterRegex = /[ _-]/;
    let words = text.split(splitterRegex);
    let word = words[0];
    words[0] = word.charAt(0).toUpperCase() + word.substring(1)
    return words.join("");
}
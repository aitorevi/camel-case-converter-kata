export function camelCaseConverter(text: string) {
    let splitterRegex = /[ _-]/;
    let words = text.split(splitterRegex);
    return words.join("");
}
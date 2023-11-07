export function camelCaseConverter(text: string) {
    let words = text.split(/[ _-]/);
    return words.join("");
}
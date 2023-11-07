export function camelCaseConverter(text: string) {
    const textWithoutSpaces = text.split(" ").join("")
    return textWithoutSpaces;
}
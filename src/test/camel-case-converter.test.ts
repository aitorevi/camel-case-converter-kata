import {camelCaseConverter} from "../core/camel-case-convereter";

describe("camel case converter", () => {
    it("allows empty word", () => {
        expect(camelCaseConverter("")).toBe("")
    })
    it("allows a one word", () => {
        expect(camelCaseConverter("Foo")).toBe("Foo")
    })
    it("convert to a word by removing spaces", () => {
        expect(camelCaseConverter("Foo Bar")).toBe("FooBar")
    })
})
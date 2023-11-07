import {camelCaseConverter} from "../core/camel-case-convereter";

describe("camel case converter", () => {
    it("allows empty word", () => {
        expect(camelCaseConverter("")).toBe("")
    })
})
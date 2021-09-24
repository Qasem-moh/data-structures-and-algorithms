"use strict";

const repeatedWord = require("./repeated-word");
const str1 = "In a galaxy far far away";
const str2 = "Taco cat ate a taco";

describe("Repeated Word Test", () => {
    it("should find the first word to occur more than once in a string", () => {
        expect(repeatedWord(str1)).toBe("far");
        expect(repeatedWord(str2)).toBe("taco");
    });

});
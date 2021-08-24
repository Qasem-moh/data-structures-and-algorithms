const { multiBracketValidation } = require('./multi-bracket-validation');

let str1 = '{}';
let str2 = '{}(){}';
let str3 = '()[[Extra Characters]]';
let str4 = '(){}[[]]';
let str5 = '{}{Code}[Fellows](())';
let str6 = '[({}]';
let str7 = '(](';
let str8 = '{(})';
let str9 = '{';
let str10 = ')';
let str11 = '[)';
let str12 = '{}[()]';

describe('[({ multiBracketValidation with Stack })] 🧪', () => {
    it('#returns true ✅ if brackets are balanced', () => {
        expect(multiBracketValidation(str1)).toEqual(true);
        expect(multiBracketValidation(str2)).toEqual(true);
        expect(multiBracketValidation(str3)).toEqual(true);
        expect(multiBracketValidation(str4)).toEqual(true);
        expect(multiBracketValidation(str5)).toEqual(true);
        expect(multiBracketValidation(str12)).toEqual(true);
    });

    it('#returns false 🛑 if brackets are not balanced', () => {
        expect(multiBracketValidation(str6)).toEqual(false);
        expect(multiBracketValidation(str7)).toEqual(false);
        expect(multiBracketValidation(str8)).toEqual(false);
        expect(multiBracketValidation(str9)).toEqual(false);
        expect(multiBracketValidation(str10)).toEqual(false);
        expect(multiBracketValidation(str11)).toEqual(false);
    });
});

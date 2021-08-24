const { bracket } = require('./multi-bracket-validation');

let stat1 = '{}';
let stat2 = '{}(){}';
let stat3 = '()[[Extra Characters]]';
let stat4 = '(){}[[]]';
let stat5 = '{}{Code}[Fellows](())';
let stat6 = '[({}]';
let stat7 = '(](';
let stat8 = '{(})';
let stat9 = '{';
let stat10 = ')';
let stat11 = '[)';
let stat12 = '{}[()]';

describe('[({ bracket with Stack })] 🧪', () => {
    it('#returns true （ ^_^）o自自o（^_^ ） if brackets are balanced', () => {
        expect(bracket(stat1)).toEqual(true);
        expect(bracket(stat2)).toEqual(true);
        expect(bracket(stat3)).toEqual(true);
        expect(bracket(stat4)).toEqual(true);
        expect(bracket(stat5)).toEqual(true);
        expect(bracket(stat12)).toEqual(true);
    });

    it('#returns false 🔥 if brackets are not balanced', () => {
        expect(bracket(stat6)).toEqual(false);
        expect(bracket(stat7)).toEqual(false);
        expect(bracket(stat8)).toEqual(false);
        expect(bracket(stat9)).toEqual(false);
        expect(bracket(stat10)).toEqual(false);
        expect(bracket(stat11)).toEqual(false);
    });
});

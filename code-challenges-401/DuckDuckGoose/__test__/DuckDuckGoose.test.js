
'use strict';

const duckDuckGoose = require('../DuckDuckGoose');

describe('Test DuckDuckGoose Game ', () => {
    it('return message if enter empty list', () => {
        expect(duckDuckGoose([], 4)).toEqual('Unexpected List Without Values');
    });
    it('return the last person string in the list correct', () => {

        expect(duckDuckGoose(['Q', 'A', 'S', 'E', 'M', 'T'], 3)).toEqual('The last Person is : Q ');
    });

});
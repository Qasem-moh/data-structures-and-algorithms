'use strict';

const { HashTable } = require('../hashTable/hash-table');
const { leftJoin } = require('./left-join');

describe('leftJoin ', () => {

    let hashTable1;
    let hashTable2;
    beforeEach(() => {
        hashTable1 = new HashTable(1024);
        hashTable2 = new HashTable(1024);

        hashTable1.set('fond', 'enamored');
        hashTable1.set('wrath', 'anger');
        hashTable1.set('diligent', 'employed');
        hashTable1.set('outfit', 'garb');
        hashTable1.set('guide', 'usher');

        hashTable2.set('fond', 'averse');
        hashTable2.set('wrath', 'delight');
        hashTable2.set('diligent', 'idle');
        hashTable2.set('guide', 'follow');
        hashTable2.set('flow', 'jam');
    });

    test(' works just fine ', () => {
        let expected = {
            wrath: ['anger', 'delight'],
            outfit: ['garb'],
            diligent: ['employed', 'idle'],
            guide: ['usher', 'follow'],
            fond: ['enamored', 'averse']
        };
        expect(leftJoin(hashTable1, hashTable2)).toEqual(expected);
    });

    test('Does not add non-corresponding key from second table', () => {
        let result = leftJoin(hashTable1, hashTable2);
        expect(result.flow).toBeFalsy();
    });
});

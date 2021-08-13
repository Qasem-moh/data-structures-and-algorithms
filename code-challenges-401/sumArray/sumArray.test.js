'use strict';

const sumArray = require('./sumArray');

const arrOne = [[1, 2, 3], [3, 5, 7], [1, 7, 10]];
const arrTwo = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]];

describe('Testing binary search in a sorted array', () => {
    test('Finds index of searchKey using binary search', () => {
        expect(sumArray(arrOne)).toEqual([6, 15, 18]);
        expect(sumArray(arrTwo)).toEqual([6, 5, 20]);
    });
});
// npm test sumArray
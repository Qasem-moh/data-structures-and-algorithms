'use strict';

const binarySearch = require('./binary-search');

const arrOne = [4, 8, 15, 16, 23, 42];
const arrTwo = [11, 22, 33, 44, 55, 66, 77];
const arrThree = [1, 2, 3, 5, 6, 7];

describe('Testing binary search in a sorted array', () => {
    test('Finds index of searchKey using binary search', () => {
        expect(binarySearch(arrOne, 15)).toEqual(2);
        expect(binarySearch(arrTwo, 90)).toEqual(-1);
        expect(binarySearch(arrThree, 4)).toEqual(-1);
    });
});
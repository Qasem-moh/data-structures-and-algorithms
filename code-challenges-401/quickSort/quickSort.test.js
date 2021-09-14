const quickSort = require('./quickSort');

describe('#quickSort()', () => {

    const arr = [8, 4, 23, 42, 16, 15];
    const arr2 = [20, 18, 12, 8, 5, -2];
    const arr3 = [5, 12, 7, 5, 5, 7];
    const arr4 = [2, 3, 5, 7, 13, 11];

    test('Works super fine', () => {
        expect(quickSort(arr, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
        expect(quickSort(arr2, 0, 5)).toEqual([-2, 5, 8, 12, 18, 20]);
        expect(quickSort(arr3, 0, 5)).toEqual([5, 5, 5, 7, 7, 12]);
        expect(quickSort(arr4, 0, 5)).toEqual([2, 3, 5, 7, 11, 13]);
    });
});
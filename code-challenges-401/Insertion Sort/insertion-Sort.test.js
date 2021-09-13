const insertion_Sort = require('./Insertion Sort');
describe('Testing insertion_Sort function', () => {
    it('sort [20,18,12,8,5,-2]', () => {
        expect(insertion_Sort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
    });
    it('sort [5,12,7,5,5,7]', () => {
        expect(insertion_Sort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
    });
    it('sort [2,3,5,7,13,11]', () => {
        expect(insertion_Sort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
    });
});
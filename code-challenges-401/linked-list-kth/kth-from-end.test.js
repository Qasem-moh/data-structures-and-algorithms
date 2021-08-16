'use strict';
const lL = require('./kth-from-end');

let newLl = new lL();


let value = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;
let value5 = 5;
let value6 = 6;

describe('Testing kthFromEnd(k)', () => {
    it('k is greater than the length of the linked list', () => {
        newLl.append(value);
        newLl.append(value2);
        newLl.append(value3);
        newLl.append(value4);
        newLl.append(value5);
        newLl.append(value6);
        expect(newLl.kthFromEnd(7)).toEqual('Exception');
    });

    it('k and the length of the list are the same', () => {
        expect(newLl.kthFromEnd(6)).toEqual('Exception');
    });
    it('k is not a positive integer', () => {
        expect(newLl.kthFromEnd(-2)).toEqual('K Not Positive');
    });
    it('linked list is of a size 1', () => {
        let newLl2 = new lL();
        newLl2.append(8);
        expect(newLl2.kthFromEnd(2)).toEqual('Exception');
        expect(newLl2.kthFromEnd(1)).toEqual('Exception');
        expect(newLl2.kthFromEnd(0)).toEqual(8);
    });

    it('Happy Path', () => {
        let newLl = new lL();

        newLl.append(value);
        newLl.append(value2);
        newLl.append(value3);
        newLl.append(value4);
        newLl.append(value5);
        newLl.append(value6);
        let value7 = 7;
        newLl.append(value7);
        expect(newLl.kthFromEnd(3)).toEqual('Happy Path');
    });

});
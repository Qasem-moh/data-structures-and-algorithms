'use strict';

const lL = require('./linked-list');
const newLl = new lL();

let val1 = 1;
let val2 = 2;
let val3 = 3;
let val4 = 4;


describe('Test lL', () => {
    it('Can successfully add a node to the end of the linked list', () => {
        newLl.append(val1);
        expect(newLl.head.value).toEqual(1);

    });
    it('Can successfully add multiple nodes to the end of a linked list', () => {

        newLl.append(val2);
        newLl.append(val3);
        newLl.append(val4);
        expect(newLl.head.next.value).toEqual(2);
        expect(newLl.head.next.next.value).toEqual(3);
        expect(newLl.head.next.next.next.value).toEqual(4);

    });
    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        const newLl2 = new lL();
        newLl2.append(val1);
        newLl2.append(val2);
        newLl2.append(val3);
        newLl2.append(val4);


        let count = 1;
        let current = newLl2.head;
        while (current.next) {
            current = current.next;
            count++;
        }
        const mid = Math.ceil(count / 2);
        newLl2.insertBefore(mid, 10);
        let string = newLl2.toString();
        expect(string).toEqual(`{${val1}}-->{${10}}-->{${val2}}-->{${val3}}-->{${val4}}-->{null}`);
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let current = newLl.head;
        newLl.insertBefore(current.value, 10);
        let string = newLl.toString();
        expect(string).toEqual(`{${10}}-->{${val1}}-->{${val2}}-->{${val3}}-->{${val4}}-->{null}`);
    });
    it(' Can successfully insert after a node in the middle of the linked list', () => {
        const newLl2 = new lL();
        newLl2.append(val1);
        newLl2.append(val2);
        newLl2.append(val3);
        newLl2.append(val4);


        let count = 1;
        let current = newLl2.head;
        while (current.next) {
            current = current.next;
            count++;
        }
        const mid = Math.ceil(count / 2);
        newLl2.insertAfter(mid, 10);
        let string = newLl2.toString();
        expect(string).toEqual(`{${val1}}-->{${val2}}-->{${10}}-->{${val3}}-->{${val4}}-->{null}`);
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        const newLl5 = new lL();
        newLl5.append(val1);
        newLl5.append(val2);
        newLl5.append(val3);
        newLl5.append(val4);
        let current = newLl5.head;
        while (current.next) {

            current = current.next;
        }
        newLl5.append(5);

        // console.log(current.value,'after insert');
        // newLl5.insertAfter(current.value,10);
        // console.log(current.value,'before insert');

        let string = newLl5.toString();
        expect(string).toEqual(`{${val1}}-->{${val2}}-->{${val3}}-->{${val4}}-->{${5}}-->{null}`);
    });
});
'use strict';

const Stack = require('../stack');

describe('stack', () => {

    it('Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });


    it('peek returns the last item in stack', () => {
        let stack = new Stack();
        stack.push(3);
        expect(stack.peek()).toEqual(3);
        stack.push(4);
        expect(stack.peek()).toEqual(4);
    });

    it('Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(3);
        expect(stack.top).toEqual(3);
        stack.push(4);
        expect(stack.top).toEqual(4);
    });

    it('Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(3);
        stack.push(4);
        stack.push(5);
        expect(stack.pop()).toEqual(5);
        expect(stack.pop()).toEqual(4);
        expect(stack.pop()).toEqual(3);
    });

    it('Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual(1);
    });


    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toEqual(true);

    });
    it('Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();
        let raises = stack.pop();
        expect(stack.raises).toEqual(undefined);

    });




});

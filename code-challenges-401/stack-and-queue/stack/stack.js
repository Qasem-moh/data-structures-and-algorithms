'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }
    push(item) {
        this.storage.unshift(item);
        this.top = item;
    }
    peek() { return this.top; }

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

    isEmpty() {
        if (this.top === undefined) { return true; }
        else return false;
    }
}


module.exports = Stack;
console.log(' on stack ');
const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(5)
const p = stack.peek();
console.log('p', p);
const po = stack.pop();
console.log('pop', po);
const p5 = stack.peek();
console.log('p', p5);
const emp = stack.isEmpty();
console.log('emp', emp);
stack.pop();
stack.pop();
const p4 = stack.peek();
console.log('p', p4);
const emp5 = stack.isEmpty();
console.log('emp', emp5);

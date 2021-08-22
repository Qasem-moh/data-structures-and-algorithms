'use strict'

class Stack {
    constructor(item) {
        this.item = item;
        this.arrayData = [];
    }

    push(item) {
        if (this.arrayData.length >= 0) {
            this.arrayData.push(item)
        }
    }

    pop() {
        if (this.arrayData.length > 0) {
            let x = this.arrayData.pop()
            console.log(x);
            return x
        } else {
            return 'exption'
        }
    }

    peek() {
        let x = this.arrayData
        console.log(x);
        return x
    }
    isEmpty() {
        if (this.arrayData.length > 0) {
            return false
        } else {
            return true
        }
    }

}

const stack = new Stack();

console.log(stack.isEmpty())
stack.push(1)
stack.push(8)
stack.push(2)
stack.push(5)
stack.pop()
stack.pop()
stack.pop()
stack.peek()
console.log(stack.isEmpty())






module.exports = Stack
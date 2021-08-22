'use strict'


class Queue {
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
            let x = this.arrayData.shift()
            return x
        } else {
            return 'exption'
        }
    }

    peek() {
        let x = this.arrayData
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

const queue = new Queue();

queue.push(1)
queue.push(8)
queue.push(2)
queue.push(5)
queue.pop()
queue.pop()
queue.peek()
console.log(queue.isEmpty())


module.exports = Queue
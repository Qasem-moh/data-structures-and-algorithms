'use strict';

class Queue {
    constructor() { this.storage = new Array(); }
    enqueue(item) { this.storage.push(item); }
    dequeue() { return this.storage.shift(); }
    peek() { return this.storage[0]; }
    isEmpty() {
        if (this.peek() == undefined) { return true }
        else return false
    }
}


console.log(' on queue ');
const queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
const p = queue.peek();
console.log(p);
queue.dequeue();
queue.dequeue();
queue.dequeue();
const p4 = queue.peek();
console.log(p4);
const t = queue.isEmpty();
console.log('empty', t);
module.exports = Queue;

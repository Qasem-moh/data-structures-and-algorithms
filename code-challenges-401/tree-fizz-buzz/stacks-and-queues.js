'use strict';


// ------------------------STACK------------------------

class Stack {
    constructor() {
        this.storage = {};
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value, this.top || null);
        this.size++;
        this.storage[this.size] = newNode;
        this.top = this.storage[this.size];
    }

    pop() {
        if (this.isEmpty()) throw new Error('Cannot pop() from empty stack');

        let popped = this.top;
        delete this.storage[this.size]; // deleting the top from storage
        this.size--;
        this.top = this.storage[this.size] || null;
        return popped;
    }

    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek() empty stack');

        return this.top;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

// ------------------------QUEUE------------------------

class Queue {
    constructor() {
        this.storage = {};
        this.front = null;
        this.rear = null;
        this.frontIndex = 0;
        this.rearIndex = 0;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value, null); // next is always null for a new node
        this.storage[this.rearIndex] = newNode;
        this.front = this.storage[this.frontIndex];
        this.rear = this.storage[this.rearIndex];
        this.rearIndex++;
        this.size = this.rearIndex - this.frontIndex;

        // setting the next property for the previous node
        if (this.size > 1) {
            this.storage[this.rearIndex - 2].next = this.storage[this.rearIndex - 1];
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('Cannot dequeue() empty queue');

        let dequeued = this.front;
        delete this.storage[this.frontIndex];
        this.frontIndex++;
        this.front = this.storage[this.frontIndex] || null;
        this.size = this.rearIndex - this.frontIndex;

        return dequeued;
    }

    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek() empty queue');

        return this.front;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

// ------------ONE NODE CLASS FOR STACK AND QUEUE------------

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// -------------------------------

module.exports = {
    Stack,
    Queue
};

'usr strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(item) {
        const node = new Node(item);
        if (this.isEmpty()) {
            this.top = node;
            return this;
        }
        node.next = this.top;
        this.top = node;
        return this;
    }
    pop() {
        if (this.isEmpty()) {
            return 'Exception';
        }
        let deleteItem = this.top.value;
        this.top = this.top.next;
        return deleteItem;
    }
    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        }
        return this.top.value;
    }
    isEmpty() {
        return this.top === null;
    }

}
class Queue {
    constructor() {
        this.front = null;
        // this.rear = null;
    }
    enqueue(item) {
        const node = new Node(item);
        if (this.isEmpty()) {
            this.front = node;
            return this;
        }
        let currentNode = this.front;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Exception';
        }
        const deleteItem = this.front.value;
        this.front = this.front.next;
        return deleteItem;
    }
    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        }
        return this.front.value;
    }
    isEmpty() {
        return this.front === null;
    }
}
module.exports = {
    Stack: Stack,
    Queue: Queue
};
'use strict';

// Node class that has properties for the value stored in the Node, and a pointer to the next node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = Node;
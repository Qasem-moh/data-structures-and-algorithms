'use strict';

const { Queue } = require('./stacks-and-queues');

class K_aryNode {
    constructor(value) {
        this.value = value || null;
        this.children = [];
    }
}

class K_aryTree {
    constructor(value) {
        this.root = new K_aryNode(value);
    }

    bfs() {
        const collection = [];
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            let current = queue.shift();

            collection.push(current.value);

            if (current.children.length) {
                current.children.forEach((node) => {
                    queue.push(node);
                });
            }
        }
        return collection;
    }

    // should return new tree
    fizzBuzzTree() {
        const newTree = new K_aryTree();
        // newTree.root = { ...this.root }; // did not deep clone
        // newTree.root = Object.assign({}, this.root); // did not deep clone
        newTree.root = JSON.parse(JSON.stringify(this.root));
        const queue = new Queue();
        queue.enqueue(newTree.root);

        while (queue.size) { // similar to array.length
            let current = queue.dequeue().value; // added .value here to access the object that contains the node

            if (current.value % 3 === 0 && current.value % 5 === 0) {
                current.value = 'FizzBuzz';
            } else if (current.value % 3 === 0) {
                current.value = 'Fizz';
            } else if (current.value % 5 === 0) {
                current.value = 'Buzz';
            } else {
                current.value = `${current.value}`;
            }

            if (current.children.length) {
                for (let i = 0; i < current.children.length; i++) {
                    queue.enqueue(current.children[i]);
                }
            }
        }
        return newTree;
    }
}

module.exports = {
    K_aryNode,
    K_aryTree
};
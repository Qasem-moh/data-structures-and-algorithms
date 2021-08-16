'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else { 
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next; 
            }
            currentNode.next = node;
        }
    }
    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                currentNode.next = {
                    value: node.value,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                const currentVal = currentNode.value;
                currentNode.value = node.value;
                currentNode.next = {
                    value: currentVal,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    toString() {
        let currentNode = this.head;
        let string = `{${currentNode.value}}-->`;
        while (currentNode.next) {
            currentNode = currentNode.next;
            string += `{${currentNode.value}}-->`;
            if (currentNode.next === null) {
                string += `{${currentNode.next}}`;
            }
        }
        return string;
    }
    kthFromEnd(k) {
        let currentNode = this.head;
        let n = 1;
        while (currentNode.next) {
            currentNode = currentNode.next;
            n++;
        }
        if (k >= 0) {
            let node = n - k;
            if (node >= 1) {
                currentNode = this.head;
                for (let i = 0; i < node - 1; i++) {
                    currentNode = currentNode.next;
                }
                if (Math.floor(n / k) === 2) {
                    return 'Happy Path';
                }
                return currentNode.value;

            } else {
                return 'Exception';

            }

        } else {
            return 'K Not Positive';
        }
    }
    length(lL) {
        let current = lL.head;
        let length = 0;
        while (current) {
            current = current.next;
            length++;
        }
        return length;
    }
}
module.exports = linkedList;

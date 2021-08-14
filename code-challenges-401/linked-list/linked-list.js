
'use strict';

class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        this.length++;
    }

    insertAtIndex(index, value) {
        if (index === 0) {
            return this.insertAtHead(value);
        }

        const prev = this.getByIndex(index - 1);
        if (prev === null) {
            return null;
        }

        prev.next = new LinkedListNode(value, prev.next);
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeAtIndex(index) {
        if (index === 0) {
            return this.removeHead();
        }

        const prev = this.getByIndex(index - 1);
        if (prev === null) {
            return null;
        }

        prev.next = prev.next.next;
        this.length--;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    includes(value) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}{${current.value}} -> `;
            current = current.next;
        }
        return `${output}null`;
    }

}

// helper function to create LL from an array or multiple values
LinkedList.fromValues = function (...values) {
    const linked_List = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        linked_List.insertAtHead(values[i]);
    }
    return linked_List;
};

class LinkedListNode {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

module.exports = LinkedList;
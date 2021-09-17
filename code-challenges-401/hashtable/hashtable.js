'use strict'
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
        return (sum * 19) % this.size;
    }
    set(key, value) {
        const hashed = this.hash(key);
        const entry = { [key]: value };

        if(!this.table[hashed]){
            this.table[hashed]=new LinkedList();
        }
        this.table[hashed].add(entry)
    }
    get(key){
        const hashed=this.hash(key);
        if(!this.table[hashed])return null;

        return this.table[hashed].getValue(key)
    }
    includes(key) {
        const hashed = this.hash(key);

        if (!this.table[hashed]) return false;

        return this.table[hashed].includes(key);
    }

}
// linkedList node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            this.length++;
        } else {
            // to add in the beginning like a stack
            // node.ext = this.root
            // this.root = node

            // to add normally
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            // console.log(current.next);
            current.next = node;
            // console.log(this.root);
            this.length++;
        }
    }

    getValue(value) {
        let current = this.root;
        for (let i = 0; i < this.length; i++) {
            // console.log(current.value[value]);
            if (current.value[value]) {
                return current.value[value];
            }
            current = current.next;
        }
        return null;
    }

    includes(value) {
        let current = this.root;
        for (let i = 0; i < this.length; i++) {
            // console.log(current.value[value]);
            if (current.value[value]) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

const hashTable = new HashTable(1024);

hashTable.set('one', '1');
hashTable.set('two', '2');
hashTable.set('three', '3');
hashTable.set('lemon', 'not-water');
hashTable.set('melon', 'water');

// console.log(hashTable.table);

// console.log(hashTable.get('two'));
// console.log(hashTable.includes('two'));
// console.log(hashTable.get('melon'));
// console.log(hashTable.includes('melon'));
// console.log(hashTable.get('batteekh'));
// console.log(hashTable.includes('batteekh'));

module.exports = {
    HashTable,
    LinkedList,
    Node
};
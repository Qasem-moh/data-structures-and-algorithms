'use strict';

const { HashTable } = require('./hashtable');

describe('HashTable Works Super Fine', () => {
    let hashTable;
    beforeEach(() => {
        hashTable = new HashTable(1024);
        hashTable.set('one', '1');
    });

    test('#set() adds to the data structure', () => {
        const index = hashTable.hash('one');
        expect(hashTable.table[index]).toBeTruthy();
    });

    test('#set() handles collision', () => {
        hashTable.set('melon', 'water');
        hashTable.set('lemon', 'not-water');

        // getting the hash for one of them should return both in the bucket
        const index = hashTable.hash('melon');

        expect(hashTable.table[index].root.value).toEqual({ 'melon': 'water' });
        expect(hashTable.table[index].root.next.value).toEqual({ 'lemon': 'not-water' });
    });

    test('#get() returns the value of the stored key', () => {
        expect(hashTable.get('one')).toEqual('1');
    });

    test('#get() returns null if key does not exist in table', () => {
        expect(hashTable.get('two')).toEqual(null);
    });

    test('#get() returns values of keys in case of collision', () => {
        hashTable.set('melon', 'water');
        hashTable.set('lemon', 'not-water');

        expect(hashTable.get('melon')).toEqual('water');
        expect(hashTable.get('lemon')).toEqual('not-water');
    });

    test('#includes() returns true if key exists', () => {
        expect(hashTable.includes('one')).toEqual(true);
    });

    test('#includes() returns false if key does not exist', () => {
        expect(hashTable.includes('two')).toEqual(false);
    });

    test('#includes() returns true if keys exist in case of collision', () => {
        hashTable.set('melon', 'water');
        hashTable.set('lemon', 'not-water');
        hashTable.set('molen', 'not-a-word');

        expect(hashTable.includes('melon')).toEqual(true);
        expect(hashTable.includes('lemon')).toEqual(true);
        expect(hashTable.includes('molen')).toEqual(true);
    });
});

'use strict';

const linkedList = require('./linked-list');

describe('Linked List', () => {
    it('can create empty linked list', () => {
        const linked_List = new linkedList();
        expect(linked_List.head).toEqual(null);
    });

    it('can properly insert at the head', () => {
        const linked_List = new linkedList();
        linked_List.insertAtHead(10);
        expect(linked_List.head.value).toEqual(10);
    });

    it('head points to next properly', () => {
        const linked_List = linkedList.fromValues(10, 20, 30);
        expect(linked_List.head.next.value).toEqual(20);
    });

    it('can insert multiple nodes into the linked list', () => {
        const linked_List = linkedList.fromValues(10, 20, 30);
        expect(linked_List.head.value).toEqual(10);
        expect(linked_List.head.next.value).toEqual(20);
        expect(linked_List.head.next.next.value).toEqual(30);
    });

    it('returns true when finding a value within the linked list', () => {
        const linked_List = linkedList.fromValues(10, 20, 30);
        const includes = linked_List.includes(20);
        expect(includes).toEqual(true);
    });

    it('returns false when value does not exist in linked list', () => {
        const linked_List = linkedList.fromValues(10, 20, 30);
        const includes = linked_List.includes(40);
        expect(includes).toEqual(false);
    });

    it('can properly return a collection of all the values in the linked list', () => {
        const linked_List = linkedList.fromValues(10, 20, 30);
        const toString = linked_List.toString();
        expect(toString).toEqual(`{10} -> {20} -> {30} -> null`);
    });
});
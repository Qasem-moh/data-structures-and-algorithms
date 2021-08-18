"use strict";

let LinkedList = require("../linkedList");
const Node = require("../node");
describe("LinkedList", () => {
    it("constructor()", () => {
        let value = 5;
        let newNode = new Node(value);
        expect(newNode.value).toEqual(value);
        expect(newNode.next).toBeNull();
    });
    it("the initial constructor()", () => {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
        expect(newList.talit).toBeNull();
        expect(newList.length).toEqual(0);
    });

    it("insert()", () => {
        let newList = new LinkedList();
        newList.insert(1);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next).toBeNull();
    });
    it("insert() many node", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(2);
    });
    it("insertBefor()  node", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        newList.append(3);
        newList.insertBefore(2, 5);
        console.log(newList.head.value);
        console.log(newList.head.next.value);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(5);
    });
    it("insertAfter()  node", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        newList.append(3);
        newList.insertAfter(1, 4);
        console.log(newList.head.value);
        console.log(newList.head.next.value);
        expect(newList.head.value).toEqual(1);
        expect(newList.head.next.value).toEqual(4);
    });
    it("append()", () => {
        let newList = new LinkedList();
        let initialValue = "First Item";
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = "Second Item";
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });
    it("include() tru", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(2)).toEqual(true);
    });
    it("include() false", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(5)).toEqual(false);
    });
    it("toStrinf()", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(2);
        expect(newList.toString()).toEqual("{1}-->{2}-->NULL");
    });
    it("kthFromEnd() Where k is greater than the length of the linked list", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(3);
        newList.append(8);
        newList.append(2);
        expect(newList.kthFromEnd(5)).toEqual("error");
    });
    it("kthFromEnd() Where k is not a positive integer", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(3);
        newList.append(8);
        newList.append(2);
        expect(newList.kthFromEnd(-1)).toEqual("error");
    });
    it("kthFromEnd() Where k and the length of the list are the same", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(3);
        newList.append(8);
        newList.append(2);
        expect(newList.kthFromEnd(4)).toEqual("error");
    });
    it("kthFromEnd() Where the linked list is of a size 1", () => {
        let newList = new LinkedList();
        newList.insert(1);
        expect(newList.kthFromEnd(0)).toEqual(1);
    });
    it("kthFromEnd() “Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
        let newList = new LinkedList();
        newList.insert(1);
        newList.append(3);
        newList.append(8);
        newList.append(2);
        expect(newList.kthFromEnd(2)).toEqual(3);
    });
    it('linkedListZip() Happy case', () => {
        let newList = new LinkedList();
        let l1 = new LinkedList();
        l1.insert(1);
        l1.append(3);
        l1.append(2);

        let l2 = new LinkedList();
        l2.insert(5);
        l2.append(9);
        l2.append(4);
        expect(newList.linkedListZip(l1, l2).toString()).toEqual('{1}-->{5}-->{3}-->{9}-->{2}-->{4}-->NULL')
    });
    it('linkedListZip() if passed empty list', () => {
        let newList = new LinkedList();
        let l1 = new LinkedList();

        let l2 = new LinkedList();
        l2.insert(5);
        l2.append(9);
        l2.append(4);
        l2.append(7);
        l2.append(11);
        expect(newList.linkedListZip(l1, l2).toString()).toEqual('{5}-->{9}-->{4}-->{7}-->{11}-->NULL')
    });
    it('linkedListZip() if the length not equal', () => {
        let newList = new LinkedList();
        let l1 = new LinkedList();
        l1.insert(1);
        l1.append(3);
        l1.append(2);
        l1.append(7);
        l1.append(11);
        let l2 = new LinkedList();
        l2.insert(5);
        l2.append(9);
        l2.append(4);
        expect(newList.linkedListZip(l1, l2).toString()).toEqual('{1}-->{5}-->{3}-->{9}-->{2}-->{4}-->{7}-->{11}-->NULL')
    });
    //   it("toStrinf() not exisit", () => {
    //     let newList = new LinkedList();
    //     newList.toString();
    //     expect(newList.head).toEqual(null);
    //   });
});

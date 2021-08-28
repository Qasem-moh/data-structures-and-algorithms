'use strict';

const Node = require('./queue');
const stack = require('./stack');

describe('test', () => {
    it('push Queue', () => {
        let QueueL = new Queue();
        QueueL.push(2);
        expect(QueueL.peek()).toEqual([2])
    })
    it('pop Queue', () => {
        let QueueL = new Queue();
        QueueL.pop();
        expect(QueueL.pop()).toEqual('exption')
    })
    it('push Queue', () => {
        let QueueL = new Queue();
        QueueL.push(2);
        QueueL.push(3);
        expect(QueueL.peek()).toEqual([2, 3])
    })
    it('push Queue', () => {
        let QueueL = new Queue();
        QueueL.push(2);
        QueueL.push(5);
        QueueL.push(3);
        QueueL.pop();
        expect(QueueL.peek()).toEqual([5, 3])
    })
    it('push Queue', () => {
        let QueueL = new Queue();
        QueueL.push(2);
        QueueL.push(5);
        QueueL.push(3);
        expect(QueueL.isEmpty()).toEqual(false)
    })
    it('push Queue', () => {
        let QueueL = new Queue();
        expect(QueueL.isEmpty()).toEqual(true)
    })
})
/******************************************************* */

describe('test stack', () => {
    it('push stack', () => {
        let stackL = new stack();
        stackL.push(2);
        expect(stackL.peek()).toEqual([2])
    })
    it('pop stack', () => {
        let stackL = new stack();
        stackL.pop();
        expect(stackL.pop()).toEqual('exption')
    })
    it('push stack', () => {
        let stackL = new stack();
        stackL.push(2);
        stackL.push(3);
        expect(stackL.peek()).toEqual([2, 3])
    })
    it('push stack', () => {
        let stackL = new stack();
        stackL.push(2);
        stackL.push(5);
        stackL.push(3);
        stackL.pop();
        expect(stackL.peek()).toEqual([2, 5])
    })
    it('push stack', () => {
        let stackL = new stack();
        stackL.push(2);
        stackL.push(5);
        stackL.push(3);
        expect(stackL.isEmpty()).toEqual(false)
    })
    it('push stack', () => {
        let stackL = new stack();
        expect(stackL.isEmpty()).toEqual(true)
    })
})

'use strict';

let Node = require('./tree-max').Node;
let BT = require('./tree-max').BinaryTree;

describe('findMaximumValue() in BT', () => {
    it('return maximun number in BT ', () => {

        let tree = new BT();
        let root = tree.root = new Node(5);
        let left = root.left = new Node(2);
        let right = root.right = new Node(8);
        expect(tree.findMaximumValue()).toEqual(8);

        right.right = new Node(5);
        left.left = new Node(3);
        left.right = new Node(4);
        left.right.right = new Node(10);
        left.right.left = new Node(6);
        expect(tree.findMaximumValue()).toEqual(10);


    });

    it('findMaximumValue() in empty BT ', () => {
        let tree = new BT();
        expect(tree.findMaximumValue()).toEqual('tree is empty');
    });

});

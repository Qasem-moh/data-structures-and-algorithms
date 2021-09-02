'use strict';

const BinaryTree = require('./binaryTree');
const Node = require('./node');
let node = new Node('folder')
let node1 = new Node('folder')
let node2 = new Node('folder')
let node3 = new Node(2)
let node4 = new Node('folder')
let node5 = new Node('folder')
let node6 = new Node(5)
let node7 = new Node(11)
let node8 = new Node(4)
let node9 = new Node(4)

node.left = node1;
node.right = node2;
node1.left = node3;
node1.right = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
node5.left = node8;
node5.right = node9;

let firstTree = new BinaryTree()
firstTree.root = node;

let one = new Node('folder')
let tow = new Node('folder')
let three = new Node('folder')
let four = new Node('folder')
let five = new Node('folder')
let six = new Node('folder')
let seven = new Node(5)
let eight = new Node(11)
let nine = new Node(4)
let ten = new Node(4)
let bb = new Node(9)

one.left = tow;
one.right = three;
tow.left = four;
three.right = five;
four.left = seven;
four.right = eight;
five.left = nine;
five.right = six;
six.left = ten;
six.right = bb;

let secondTree = new BinaryTree()
secondTree.root = one;

let thierdTree = new BinaryTree()
thierdTree.root = three

describe('comparing between two directory--->', () => {


    it('both have same number of files', () => {

        expect(secondTree.compairtwoTrees(firstTree, secondTree)).toEqual(`Both trees contain 5 files.`);
    });
    it('they dont have same number of files', () => {
        expect(secondTree.compairtwoTrees(firstTree, thierdTree)).toEqual(`The first tree has 5 files, while the second has 3.`);
    });

});
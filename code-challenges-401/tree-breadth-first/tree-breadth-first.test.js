'use strict';

const BinaryTree =  require('./tree-breadth-first').BinaryTree;
const Node = require('./tree-breadth-first').Node;

describe('Test Breadth-first Traversal() in BT' , ()=>{
  it('Happy Path',()=>{
    let tree = new BinaryTree();
    let root =tree.root =new Node(2);
    let left = root.left= new Node(7);
    let right = root.right = new Node(5);
    left.left = new Node(2);
    left.right = new Node(6);
    left.right.left = new Node(5);
    left.right.right = new Node(11);
    right.right= new Node(9);
    right.right.left= new Node(4);
    expect(tree.BreadthFirstTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
  });

  it('Edg Case ==> Tree empty',()=>{
    let tree = new BinaryTree();
    expect(tree.BreadthFirstTraversal()).toEqual('Tree is Empty');
  });
});

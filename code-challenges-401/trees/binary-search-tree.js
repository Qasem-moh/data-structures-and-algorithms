"use strict";

const Node = require("./node");
const BinaryTree = require('./tress')
class BinarySearchTree extends BinaryTree {

    constructor() {
        super();
        this.root = null;
    }

    add(value) {
        let node = new Node(value);
        let addValue = (current, node) => {
            if (node.value < current.value) {
                if (!current.left) {
                    current.left = node;
                } else {
                    addValue(current.left, node);
                }
            } else {
                if (!current.right) {
                    current.right = node;
                } else {
                    addValue(current.right, node);
                }
            }
        };

        if (!this.root) {
            this.root = node;
        } else {
            addValue(this.root, node);
        }
    }

    contains(value) {
        if (!this.root.value) {
            return false;
        }

        let searchValue = (current, value) => {
            if (current.value === value) {
                return true;
            } else if (current.value > value) {
                if (!current.left) {
                    return false;
                }
                return searchValue(current.left, value);
            } else {
                if (!current.right) {
                    return false;
                }
                return searchValue(current.right, value);
            }
        };

        return searchValue(this.root, value);
    }
}


module.exports = BinarySearchTree;


"use strict";

class BinaryTree {
    constructor() {
        this.root = null;
    }
    preOrder() {
        let result = [];
        let travers = (node) => {
            result.push(node.value);
            if (node.left) {
                travers(node.left);
            }
            if (node.right) {
                travers(node.right);
            }
        };
        travers(this.root);
        return result;
    }

    inOrder() {
        let result = [];
        let travers = (node) => {
            if (node.left) {
                travers(node.left);
            }
            result.push(node.value);
            if (node.right) {
                travers(node.right);
            }
        };
        travers(this.root);
        return result;
    }

    postOrder() {
        let result = [];
        let travers = (node) => {
            if (node.left) {
                travers(node.left);
            }
            if (node.right) {
                travers(node.right);
            }
            result.push(node.value);
        };
        travers(this.root);
        return result;
    }
}


module.exports = BinaryTree;
let Queue = require('./stackAndQueue').Queue;

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    BreadthFirstTraversal() {

        if (!this.root) return 'Tree is Empty';
        let output = [];
        let queue = new Queue();
        queue.enqueue(this.root);
        while (queue.front) {
            let front = queue.dequeue();
            output.push(front.value);
            if (front.left) queue.enqueue(front.left);
            if (front.right) queue.enqueue(front.right);
        }
        return output;
    }

}


module.exports = {
    BinaryTree,
    Node,
};

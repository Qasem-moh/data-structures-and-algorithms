// let inoderTraversal = (root) => {
//     if (root === null) {
//         return []
//     }
//     const result = [];
//     if (root.left !== null) {
//         result.push(...inoderTraversal(root.left))
//     }
//     result.push(root.val)
//     if (root.right !== null) {
//         result.push(...inoderTraversal(root.right))
//     }
//     return result;
// }

// inoderTraversal();
class Node {
    constructor(data) {
        this.left = null
        this.right = null
        this.data = data
    }

}
class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node(data)

        if (this.root === null) {
            this.root = node
            return
        }

        let current = this.root
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = node
                    return
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }

}

const tree = new BST()
console.log(tree)
tree.insert(50)
tree.insert(31)
tree.insert(60)
tree.insert(35)
tree.insert(51)
tree.insert(99)
let result = [];
let toVisit = [tree.root]
while (toVisit.length) {
    let currentNode = toVisit.shift()
    if (currentNode === null) {
        result.push('null')
        continue;
    }
    result.push(currentNode.data)
    toVisit.push(currentNode.left)
    toVisit.push(currentNode.right)

}
console.log(result.join(','))
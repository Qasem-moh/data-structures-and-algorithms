'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                currentNode.next = {
                    value: node.value,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                const currentVal = currentNode.value;
                currentNode.value = node.value;
                currentNode.next = {
                    value: currentVal,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    toString() {
        let currentNode = this.head;
        let string = `{${currentNode.value}}-->`;
        while (currentNode.next) {
            currentNode = currentNode.next;
            string += `{${currentNode.value}}-->`;
            if (currentNode.next === null) {
                string += `{${currentNode.next}}`;
            }
        }
        return string;
    }
    kthFromEnd(k) {
        let currentNode = this.head;
        let n = 1;
        while (currentNode.next) {
            currentNode = currentNode.next;
            n++;
        }
        if (k >= 0) {
            let node = n - k;
            if (node >= 1) {
                currentNode = this.head;
                for (let i = 0; i < node - 1; i++) {
                    currentNode = currentNode.next;
                }
                // if(Math.floor(n/k)===2){
                //   return 'Happy Path';
                // }
                return currentNode.value;

            } else {
                return 'Exception';

            }


        } else {
            return 'K Not Positive';
        }
    }
    length(lL) {
        let current = lL.head;
        let length = 0;
        while (current) {
            current = current.next;
            length++;
        }
        return length;
    }
}
let lL1 = new linkedList();
let lL2 = new linkedList();

lL1.append(1);
lL1.append(3);
lL1.append(5);
lL1.append(7);


lL2.append(2);
lL2.append(4);
lL2.append(6);
lL2.append(8);
function zipLists(lL1, lL2) {
    let newLL = new linkedList();

    let LL1Length = newLL.length(lL1);
    let LL2Length = newLL.length(lL2);
    let gratLength;
    if (LL1Length > LL2Length) {
        gratLength = LL1Length;
    } else {
        gratLength = LL2Length;
    }
    let count1 = 1;
    let count2 = 1;
    while (gratLength) {
        gratLength--;

        if (count1 <= LL1Length) {
            newLL.append(lL1.kthFromEnd(LL1Length - count1));
            count1++;
        }
        if (count2 <= LL2Length) {
            newLL.append(lL2.kthFromEnd(LL2Length - count2));
            count2++;
        }
    }
    return newLL;
}

zipLists(lL1, lL2);

module.exports = {
    linkedList,
    zipLists
};

'use strict';

const Queue = require('./queue');

let myQueue = new Queue();

let dequeueValue = '';

function duckDuckGoose(uStr, k) {
    if (uStr.length !== 0) {
        for (let x = 0; x < uStr.length; x++) {
            myQueue.enqueue(uStr[x]);
        }
    } else {
        return 'Unexpected List Without Values';
    }

    while (myQueue.size() !== 1) {
        for (let y = 0; y < k - 1; y++) {
            dequeueValue = myQueue.dequeue();
            myQueue.enqueue(dequeueValue.value);
        }
        myQueue.dequeue();
    }
    return `The last Person is : ${myQueue.dequeue().value} `;
}

module.exports = duckDuckGoose;

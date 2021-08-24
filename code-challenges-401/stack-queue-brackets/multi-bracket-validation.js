/* eslint-disable indent */
'use strict';

const Stack = require('./stacks-and-queues').Stack;

function bracket(string) {
    if (!string) return false;

    let bracketsArray = [];
    let split = string.split('');
    for (let i = 0; i < split.length; i++) {
        if (split[i] === '(') bracketsArray.push(1);
        if (split[i] === ')') bracketsArray.push(-1);
        if (split[i] === '{') bracketsArray.push(2);
        if (split[i] === '}') bracketsArray.push(-2);
        if (split[i] === '[') bracketsArray.push(3);
        if (split[i] === ']') bracketsArray.push(-3);
    }
    if (bracketsArray.length <= 1) return false;
    if (bracketsArray[0] < 0) return false;

    const stack = new Stack();

    let length = bracketsArray.length;

    for (let i = 0; i < length; i++) {
        let bracket = bracketsArray.shift();
        console.log('before', stack.top)
        if (!stack.top) {
            stack.push(bracket);
        } else if (bracket > 0) {
            stack.push(bracket);
        } else if ((bracket * -1) === stack.top.value) { 
            stack.pop();
        } else {
            return false;
        }
        console.log('after', stack.top)
    }
    return true;
}

module.exports = {
    bracket
};

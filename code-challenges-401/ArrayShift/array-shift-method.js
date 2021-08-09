'use strict';

function insertShiftArrayMethod(arr, val) {
    const shiftedArrayTest = [];
    shiftedArrayTest.length = arr.length + 1;
    const imiddleIndexNumber = Math.ceil(arr.length / 2);

    populateUntilMiddle(shiftedArrayTest, imiddleIndexNumber, arr, val);

    populateAfterMiddle(shiftedArrayTest, imiddleIndexNumber, arr);

    return shiftedArrayTest;
}

function populateUntilMiddle(shiftedArrayTest, imiddleIndexNumber, arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (i === imiddleIndexNumber) {
            shiftedArrayTest[i] = val;
            break;
        }
        shiftedArrayTest[i] = arr[i];
    }
}

function populateAfterMiddle(shiftedArrayTest, imiddleIndexNumber, arr) {
    for (let i = imiddleIndexNumber + 1; i < shiftedArrayTest.length; i++) {
        shiftedArrayTest[i] = arr[i - 1];
    }
}

module.exports = insertShiftArrayMethod;

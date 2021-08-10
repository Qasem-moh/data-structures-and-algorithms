'use strict';

function insertShiftArrayMethod(arr, val) {
    const shiftedArrayTest = [];
    shiftedArrayTest.length = arr.length + 1;
    const imiddleIndexNumber = Math.ceil(arr.length / 2);

    indexPopulateUntilMiddle(shiftedArrayTest, imiddleIndexNumber, arr, val);

    indexPopulateAfterMiddle(shiftedArrayTest, imiddleIndexNumber, arr);

    return shiftedArrayTest;
}

function indexPopulateUntilMiddle(shiftedArrayTest, imiddleIndexNumber, arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (i === imiddleIndexNumber) {
            shiftedArrayTest[i] = val;
            break;
        }
        shiftedArrayTest[i] = arr[i];
    }
}

function indexPopulateAfterMiddle(shiftedArrayTest, imiddleIndexNumber, arr) {
    for (let i = imiddleIndexNumber + 1; i < shiftedArrayTest.length; i++) {
        shiftedArrayTest[i] = arr[i - 1];
    }
}

module.exports = insertShiftArrayMethod;

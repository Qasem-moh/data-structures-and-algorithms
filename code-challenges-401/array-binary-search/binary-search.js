
'use strict';

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.ceil((start + end) / 2);

        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

module.exports = binarySearch;
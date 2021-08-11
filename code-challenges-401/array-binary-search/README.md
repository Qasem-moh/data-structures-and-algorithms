# Array Binary Search

[**Find index of search key in a sorted array using binary search**](./array-binary-search.js)

**Challenge**: Index of search key should be found in the sorted array without utilizing built-in methods, if search key doesn't exist in the array return `-1`... while applying our own testing code.

**Approach & Efficiency**: A `while` loop is very handy in this situation... I used a `start`, `end` and `middle` indexes (indices) to employ a divide-and-conquer strategy in chopping the array in halves until the index is found :) or not found :(

**Solution**:

*run: npm test binary-search*

![arrayBinarySearch img](https://i.ibb.co/4Yv2Tmh/arr.png)
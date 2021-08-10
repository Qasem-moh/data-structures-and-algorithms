# Array Shift

[**Insert Value In Middle Of Array**](./array-shift-method.js)

**Challenge**: The value must be inserted in the middle of the array, or after the middle if the length of the array is odd...without using built-in methods

**Approach & Efficiency**: I copied the array by value not reference so that the original array stays immutable, then I calculated the middle index using `Math.ceil` to account for arrays with odd length... then I used two for loops to populate the shifted array, the first loop for values until the middle, and the second loop for values after the middle.

**Solution**:

*run: npm test array-shift*

![arrayShift img](https://i.ibb.co/WF0MNd3/shift.png)
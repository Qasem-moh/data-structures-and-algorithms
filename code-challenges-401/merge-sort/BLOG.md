# mergeSort

Merge Sort is a sorting algorithm
  - It follows a divide and conquer approach
  - It keeps splitting the array in half recursively
  - Then sorts the two halves of the array
  - Then merges the two halves by comparing the values by index, and pushing the correct value to the finally sorted array

---

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

---

## JavaScript

```javascript
const mergeSort = function (items, compare) {
  compare = compare ? compare : (a, b) => a < b;

  if (items.length < 2) return items;

  let middle = Math.floor(items.length / 2);

  let left = items.slice(0, middle);
  let right = items.slice(middle);

  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
};

function merge(left, right, compare) {
  var result = [];

  while (left.length || right.length) {
    if (!left.length) {
      result.push(right.shift());
      continue;
    }

    if (!right.length) {
      result.push(left.shift());
      continue;
    }

    if (compare(left[0], right[0])) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}
```

---

## Tracing

![insertionSort](https://i.ibb.co/SP4bmwx/merge-sort.png)

---

## Efficiency

- **Time**:
  - O(nLogn)
- **Space**:
  - O(n)
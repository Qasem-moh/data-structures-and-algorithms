# quickSort

Quick Sort is a sorting algorithm
  - Quick Sort is one of the different Sorting Technique which is based on the concept of Divide and Conquer, just like merge sort. But in quick sort all the heavy lifting(major work) is done while dividing the array into subarrays, while in case of merge sort, all the real work happens during merging the subarrays. In case of quick sort, the combine step does absolutely nothing. [source](https://www.studytonight.com/data-structures/quick-sort)

---

## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
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

---

## Efficiency

- **Time**:
  - O(nLogn) or O(n^2) depending on partitioning and subarrays
- **Space**:
  - O(nLogn)
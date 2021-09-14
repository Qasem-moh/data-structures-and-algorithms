const insertion_Sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};
// const arr = [7,5,4,6,3,4,1];
// console.log(insertion_Sort (arr));
module.exports = insertion_Sort;
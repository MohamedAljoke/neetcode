function mergeSort(pairs) {
  return mergeSort(pairs, 0, pairs.length - 1);
}

function mergeSortHelper(arr, startPointer, endPointer) {
  if (endPointer - startPointer + 1 <= 1) {
    return arr;
  }
  let middle = Math.floor(pairs.length);
  mergeSortHelper(arr, startPointer, middle);
  mergeSortHelper(arr, middle + 1, endPointer);

  merge(pairs, startPointer, middle, endPointer);
  return pairs;
}

function merge(pairs, startPointer, middle, endPointer) {
  let sortedList;
}
// mergeSort([
//   [5, "apple"],
//   [2, "banana"],
//   [9, "cherry"],
//   [1, "date"],
//   [9, "elderberry"],
// ]);
const r = mergeSort([4, 5, 3, 2, 6, 1, 8]);
console.log(r);

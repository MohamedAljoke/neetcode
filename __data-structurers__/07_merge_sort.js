function mergeSort(pairs) {
  let pointer = 0;
  while (pointer <= 0 && pointer < pairs.length && pairs[pointer]) {
    if (pairs[pointer][0] > pairs[pointer + 1][0]) {
      console.log(pointer);
      const temp = pairs[pointer];
      pairs[pointer] = pairs[pointer + 1];
      pairs[pointer + 1] = temp;
      pointer--;
    } else {
      pointer++;
    }
  }
  console.log(pairs);
}

mergeSort([
  [5, "apple"],
  [2, "banana"],
  [9, "cherry"],
  [1, "date"],
  [9, "elderberry"],
]);

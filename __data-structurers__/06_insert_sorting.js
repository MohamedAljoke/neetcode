function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j < i) {
      const temp = arr[j + 1];
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
        j--;
      } else {
        j++;
      }
    }
  }
  return arr;
}

insertionSort([4, 5, 3, 2, 1, 8]);

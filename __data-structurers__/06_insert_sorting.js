function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        j--;
      } else {
        break;
      }
    }
  }
  console.log({ arr });
}
insertionSort([4, 5, 3, 2, 1, 8]);

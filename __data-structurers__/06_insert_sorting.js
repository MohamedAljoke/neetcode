function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let l = i - 1;
    while (arr[l + 1] < arr[l] && l >= 0) {
      let temp = arr[l + 1];
      arr[l + 1] = arr[l];
      arr[l] = temp;
      l--;
    }
  }
  console.log(arr);
}
insertionSort([4, 5, 3, 2, 6, 1, 8]);

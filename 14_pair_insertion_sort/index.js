function insertionSort(pairs) {
  let currentList = [];
  for (let i = 1; i < pairs.length; i++) {
    let j = i - 1;
    currentList.push([...pairs]);

    while (j < i && j >= 0) {
      let temp = pairs[j + 1];
      if (pairs[j][0] > temp[0]) {
        pairs[j + 1] = pairs[j];
        pairs[j] = temp;
        j--;
      } else {
        j++;
      }
    }
  }
  currentList.push([...pairs]);
  console.log(currentList);
  return currentList;
}

const pairs = [
  [5, "apple"],
  [2, "banana"],
  [9, "cherry"],
];

insertionSort(pairs);

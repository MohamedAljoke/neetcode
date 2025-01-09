// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export const removeDuplicateFromSortedArray = function (nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[pointer]) {
      nums[pointer + 1] = nums[i];
      pointer++;
    }
  }
  return pointer + 1;
};

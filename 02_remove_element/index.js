// https://leetcode.com/problems/remove-element/description/

export const removeElementReturnsNumsWithoutVal = function (nums, val) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(i, pointer);
    if (nums[i] != val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
};

// https://leetcode.com/problems/concatenation-of-array/description/

export const concatArray = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }
  return ans;
};

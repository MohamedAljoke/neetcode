// https://leetcode.com/problems/contains-duplicate/
export class Solution {
  hasDuplicate(nums) {
    const mapOfNums = {};
    for (let num of nums) {
      if (mapOfNums[num]) {
        return true;
      }
      mapOfNums[num] = true;
    }
    return false;
  }
}
const solution = new Solution();
const doesHas = solution.hasDuplicate([1, 2, 3, 4, 2]);
// console.log(doesHas);

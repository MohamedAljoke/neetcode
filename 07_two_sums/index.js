// https://leetcode.com/problems/two-sum/description/

export const twoSum = function (nums, target) {
  const mapOfSums = {};

  for (let i = 0; i < nums.length; i++) {
    if (mapOfSums[nums[i]] !== undefined) {
      return [mapOfSums[nums[i]], i];
    } else {
      mapOfSums[target - nums[i]] = i;
    }
  }
  return [];
};

const result = twoSum([0, 2, 3], 3);
// console.log(result);

import assert from "node:assert/strict";
import { twoSum } from "./index.js";

const testCases = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    result: [0, 1],
    description: "",
  },
  {
    nums: [3, 2, 4],
    target: 6,
    result: [1, 2],
    description: "",
  },
  {
    nums: [3, 3],
    target: 6,
    result: [0, 1],
    description: "",
  },
];

function runTests(tests) {
  tests.forEach((tc, index) => {
    const result = twoSum(tc.nums, tc.target);
    try {
      assert.deepEqual(result, tc.result);
      console.log(`Test ${index + 1} passed: ${tc.description}`);
    } catch (error) {
      console.error(
        `Test ${index + 1} failed: ${tc.description}\nExpected: ${
          tc.result
        }, Got: ${result}`
      );
    }
  });
}

runTests(testCases);

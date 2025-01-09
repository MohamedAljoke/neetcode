import assert from "node:assert/strict";
import { Solution } from "./index.js";

const testCases = [
  {
    nums: [1, 2, 1],
    result: true,
    description: "should be true when there is duplicate",
  },
  {
    nums: [1, 1, 1],
    result: true,
    description:
      "should be true when there is duplicate even if it is more than once",
  },
  {
    nums: [1, 0, -1, 5],
    result: false,
    description: "should be false when there are no duplicates",
  },
];

function runTests(tests) {
  tests.forEach((tc, index) => {
    const solution = new Solution();
    const result = solution.hasDuplicate(tc.nums);

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

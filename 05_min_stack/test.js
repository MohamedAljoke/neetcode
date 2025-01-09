import { test } from "node:test";
import assert from "node:assert/strict";
import { MinStack } from "./index.js";

function runTests(tests) {
  tests.forEach(([operations, expectedResult], testIndex) => {
    const minStack = new MinStack();
    const result = [];
    operations.forEach((op, i) => {
      if (op === "push") {
        const value = operations[i + 1];
        minStack.push(value);
        result.push(null); // push does not return anything
      } else if (op === "pop") {
        minStack.pop();
        result.push(null); // pop does not return anything
      } else if (op === "top") {
        result.push(minStack.top());
      } else if (op === "getMin") {
        result.push(minStack.getMin());
      }
    });

    const testPassed =
      JSON.stringify(result) === JSON.stringify(expectedResult);
    if (testPassed) {
      console.log(`Test ${testIndex + 1}: Passed`);
    } else {
      console.log(`Test ${testIndex + 1}: Failed`);
      console.log(`Expected: ${JSON.stringify(expectedResult)}`);
      console.log(`Got: ${JSON.stringify(result)}`);
    }
  });
}

const testCases = [
  [
    ["push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"],
    [null, null, null, 0, null, 2, 1],
  ],

  [
    ["push", 3, "push", 1, "push", 4, "top", "getMin"],
    [null, null, null, 4, 1],
  ],
];

runTests(testCases);

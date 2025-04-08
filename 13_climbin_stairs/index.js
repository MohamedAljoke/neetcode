import { test } from "node:test";
import assert from "node:assert/strict";

function climbStairs(n) {
  if (n <= 1) {
    return 1;
  }
  const numberOfSteps = climbStairs(n - 1);
  const numberOfStepsByTwo = climbStairs(n - 2);
  return numberOfStepsByTwo + numberOfSteps;
}

function testSolution() {
  test("Solution", async (t) => {
    await t.test("simple case", () => {
      const res = climbStairs(1);
      assert.equal(res, 1);
    });
    await t.test("simple case", () => {
      const res = climbStairs(3);
      assert.equal(res, 3);
    });
  });
}
testSolution();
const res = climbStairs(5);
console.log(res);

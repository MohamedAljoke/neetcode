import { test } from "node:test";
import assert from "node:assert/strict";

function climbStairs(n) {}

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
climbStairs(5);

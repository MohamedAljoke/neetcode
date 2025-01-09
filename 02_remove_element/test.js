import { test } from "node:test";
import assert from "node:assert/strict";
import { removeElementReturnsNumsWithoutVal } from "./index.js";

test("removeElementReturnsNumsWithoutVal", async (t) => {
  await t.test("simple case - remove 3 from [3, 2, 2, 3]", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const pointer = removeElementReturnsNumsWithoutVal(nums, val);
    assert.strictEqual(pointer, 2);
    assert.deepStrictEqual(nums.slice(0, pointer), [2, 2]);
  });

  await t.test(
    "case with more elements - remove 2 from [0, 1, 2, 2, 3, 0, 4, 2]",
    () => {
      const nums = [0, 1, 2, 2, 3, 0, 4, 2];
      const val = 2;
      const pointer = removeElementReturnsNumsWithoutVal(nums, val);
      assert.strictEqual(pointer, 5);
      assert.deepStrictEqual(nums.slice(0, pointer), [0, 1, 3, 0, 4]);
    }
  );

  await t.test("case with no elements", () => {
    const nums = [0, 1, 2, 3, 4, 6];
    const val = 5;
    const pointer = removeElementReturnsNumsWithoutVal(nums, val);
    assert.strictEqual(pointer, nums.length);
    assert.deepStrictEqual(nums.slice(0, pointer), [0, 1, 2, 3, 4, 6]);
  });

  await t.test("case with all elements removed", () => {
    const nums = [1, 1, 1, 1];
    const val = 1;
    const pointer = removeElementReturnsNumsWithoutVal(nums, val);
    assert.strictEqual(pointer, 0);
    assert.deepStrictEqual(nums.slice(0, pointer), []);
  });
});

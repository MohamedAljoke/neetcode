import { test } from "node:test";
import assert from "node:assert/strict";
import { removeDuplicateFromSortedArray } from "./index.js";

test("removeDuplicateFromSortedArray", async (t) => {
  await t.test("simple case - remove duplicates [1, 1, 3, 3]", () => {
    const nums = [1, 1, 3, 3, 4];
    const pointer = removeDuplicateFromSortedArray(nums);
    assert.strictEqual(pointer, 3);
    assert.deepStrictEqual(nums.slice(0, pointer), [1, 3, 4]);
  });
});

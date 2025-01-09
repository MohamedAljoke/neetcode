import { test } from "node:test";
import assert from "node:assert/strict";
import { concatArray } from "./index.js";

test("concatArray", async (t) => {
  await t.test("simple case   [1, 2, 1]", () => {
    const nums = [1, 2, 1];
    const result = concatArray(nums);
    assert.deepEqual(result, [1, 2, 1, 1, 2, 1]);
  });
});

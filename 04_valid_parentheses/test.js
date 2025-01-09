import { test } from "node:test";
import assert from "node:assert/strict";
import { Solution } from "./index.js";

test("Solution", async (t) => {
  await t.test("simple case   [()]", () => {
    const myClass = new Solution();
    const result = myClass.isValid("[()]");
    assert.equal(result, true);
  });
  await t.test("simple case  []", () => {
    const myClass = new Solution();
    const result = myClass.isValid("[]");
    assert.equal(result, true);
  });
  await t.test("simple case  ([{}])", () => {
    const myClass = new Solution();
    const result = myClass.isValid("([{}])");
    assert.equal(result, true);
  });
  await t.test("simple case  ()[]{}", () => {
    const myClass = new Solution();
    const result = myClass.isValid("()[]{}");
    assert.equal(result, true);
  });
  await t.test("simple case  ()[){}", () => {
    const myClass = new Solution();
    const result = myClass.isValid("()[){}");
    assert.equal(result, false);
  });
  await t.test("simple case  ([{}])", () => {
    const myClass = new Solution();
    const result = myClass.isValid("([{]])");
    assert.equal(result, false);
  });
  await t.test("simple case  ([)]", () => {
    const myClass = new Solution();
    const result = myClass.isValid("([)]");
    assert.equal(result, false);
  });
  await t.test("simple case  ]", () => {
    const myClass = new Solution();
    const result = myClass.isValid("]");
    assert.equal(result, false);
  });
  await t.test("simple case  ([]{}[])", () => {
    const myClass = new Solution();
    const result = myClass.isValid("([]{}[])");
    assert.equal(result, true);
  });
});

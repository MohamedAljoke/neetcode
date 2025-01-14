class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {}
}

const solutionClass = new Solution();
const result = solutionClass.reverseList({
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
});
console.log(result);

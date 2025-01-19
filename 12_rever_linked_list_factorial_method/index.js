class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    if (!head) {
      return null;
    }
    let newHead = head;
    if (newHead.next) {
      newHead = reverseList(head.next);
      head.next.next = head;
    }
    head.next = null;
    return newHead;
  }
}

const solutionClass = new Solution();
const result = solutionClass.reverseList({
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  },
});
console.log(result);

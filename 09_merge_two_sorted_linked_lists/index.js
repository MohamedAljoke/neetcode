class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {}
}

const mySolution = new Solution();

const res = mySolution.mergeTwoLists(
  {
    val: 1,
    next: {
      val: 6,
      next: {
        val: 7,
        next: null,
      },
    },
  },
  {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  }
);
console.log(res);

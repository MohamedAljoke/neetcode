class ListNode1 {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode1(-1);
    this.tail = this.head;
  }

  insertTail(val) {
    let curr = new ListNode1(val);
    this.tail.next = curr;
    this.tail = curr;
  }
}
class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    let merged = new LinkedList();
    while (list1 && list2) {
      if (list1.val < list2.val) {
        merged.insertTail(list1.val);
        list1 = list1.next;
      } else {
        merged.insertTail(list2.val);
        list2 = list2.next;
      }
    }
    while (list1) {
      merged.insertTail(list1.val);
      list1 = list1.next;
    }
    while (list2) {
      merged.insertTail(list2.val);
      list2 = list2.next;
    }
    return merged.head.next;
  }
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
console.log(JSON.stringify(res));

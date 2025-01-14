class LinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = new LinkedNode(-1);
    this.tail = this.head;
  }
  insertHead(val) {
    let newNode = new LinkedNode(val, this.head.next);
    this.head.next = newNode;
    if (!newNode.next) {
      this.tail = newNode;
    }
  }
}
class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let curr = head;
    const listOfValues = [];
    while (curr) {
      listOfValues.push(curr.val);
      curr = curr.next;
    }
    let linkedList = new LinkedList();
    for (let item of listOfValues) {
      linkedList.insertHead(item);
    }
    return linkedList.head.next;
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

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    const dummy = { val: 0, next: null };
    let pointer = dummy;
    let count = 0;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        let temp = list1;
        pointer.next = temp;
        list1 = list1.next;
      } else {
        let temp = list2;
        pointer.next = temp;
        list2 = list2.next;
      }
      console.log(count);
      pointer = pointer.next;
      count++;
      if (count === 20) break;
    }
    if (list1) {
      pointer.next = list1;
    } else {
      pointer.next = list2;
    }
    console.log(JSON.stringify(dummy));
    return dummy.next;
  }
}

const mySolution = new Solution();

const generateLinkedListFromArray = (array) => {
  let linked = { val: -1, next: null };
  let pointer = linked;
  for (let item of array) {
    let temp = { val: item, next: null };
    pointer.next = temp;
    pointer = pointer.next;
  }
  return linked.next;
};
const list1 = generateLinkedListFromArray([1, 2, 4]);
const list2 = generateLinkedListFromArray([1, 1, 2, 3, 4, 5, 10]);
const res = mySolution.mergeTwoLists(list1, list2);
// console.log(JSON.stringify(res));

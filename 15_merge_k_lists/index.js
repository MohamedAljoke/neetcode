class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return null;
  }
  return divide(lists, 0, lists.length - 1);
};

function divide(lists, start, end) {
  if (start > end) {
    return null;
  }
  if (start === end) {
    return lists[start];
  }
  const middle = Math.floor(start + (end - start) / 2);
  const left = divide(lists, start, middle);
  const right = divide(lists, middle + 1, end);

  return conquer(left, right);
}
function conquer(left, right) {
  const dummy = new ListNode(0);
  let current = dummy;
  while (left && right) {
    if (left.val <= right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  current.next = left ? left : right;
  return dummy.next;
}

function createLinkedList(arr) {
  if (!arr.length) return null;

  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
const list1 = createLinkedList([1, 4, 5, 8, 9, 10]);
const list2 = createLinkedList([1, 3, 4]);
const list3 = createLinkedList([2, 6]);

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);
function printLinkedList(headList) {
  const result = [];
  let current = headList;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
console.log(printLinkedList(mergedList));

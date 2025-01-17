class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = this.head; //tail é basicamente um POINTER para o ultimo elemento da lista
  }

  get(index) {
    let curr = this.head.next;
    let pointer = 0;
    while (index >= pointer && curr) {
      if (index === pointer) {
        return curr.value;
      }
      curr = curr.next;
      pointer++;
    }
    return -1;
  }

  insertHead(val) {
    let node = new ListNode(val);
    node.next = this.head.next;
    this.head.next = node;
    if (!node.next) {
      this.tail = node;
    }
  }

  insertTail(val) {
    let node = new ListNode(val);
    this.tail.next = node;
    this.tail = node;
  }

  remove(index) {
    let i = 0;
    let curr = this.head;
    while (i < index && curr) {
      i++;
      curr = curr.next;
    }

    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      curr.next = curr.next.next;
      return true;
    }
    return false;
  }

  getValues() {
    let curr = this.head.next;
    let listOfValues = [];
    while (curr) {
      listOfValues.push(curr.value);
      curr = curr.next;
    }
    return listOfValues;
  }
}

function runTests(tests) {
  tests.forEach(([operations, expectedResult], testIndex) => {
    const linkedList = new LinkedList();
    const result = [];
    operations.forEach((op, i) => {
      if (op === "get") {
        const value = operations[i + 1];
        result.push(linkedList.get(value)); // push does not return anything
      } else if (op === "insertHead") {
        const value = operations[i + 1];
        linkedList.insertHead(value);
        result.push(null); // pop does not return anything
      } else if (op === "insertTail") {
        const value = operations[i + 1];
        result.push(linkedList.insertTail(value));
      } else if (op === "remove") {
        const value = operations[i + 1];
        result.push(linkedList.remove(value));
      } else if (op === "getValues") {
        result.push(linkedList.getValues());
      }
    });

    const testPassed =
      JSON.stringify(result) === JSON.stringify(expectedResult);
    if (testPassed) {
      console.log(`Test ${testIndex + 1}: Passed`);
    } else {
      console.log(`Test ${testIndex + 1}: Failed`);
      console.log(`Expected: ${JSON.stringify(expectedResult)}`);
      console.log(`Got: ${JSON.stringify(result)}`);
    }
  });
}

const testCases = [
  [
    [
      "insertTail",
      1,
      "insertTail",
      2,
      "get",
      1,
      "remove",
      1,
      "insertTail",
      2,
      "get",
      1,
      "get",
      0,
    ],
    [null, null, 2, true, null, 2, 1],
  ],
  [
    [
      "insertHead",
      1,
      "insertTail",
      2,
      "insertHead",
      0,
      "remove",
      1,
      "getValues",
    ],
    [null, null, null, true, [0, 2]],
  ],
  [
    ["insertHead", 1, "insertTail", 2, "insertHead", 0, "getValues"],
    [null, null, null, [0, 1, 2]],
  ],
  [
    ["insertHead", 1, "insertHead", 2, "get", 5],
    [null, null, -1],
  ],
];

runTests(testCases);

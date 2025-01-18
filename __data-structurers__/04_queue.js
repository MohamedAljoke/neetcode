class Node {
  /**
   * @param {number} value The value to be stored in the node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDeque {
  constructor() {
    this.dummyHead = new Node(-1);
    this.dummyTail = new Node(-1);

    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  isEmpty() {
    return this.dummyHead.next === this.dummyTail;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.next = this.dummyTail;
    newNode.prev = this.dummyTail.prev;
    this.dummyTail.prev.next = newNode;
    this.dummyTail.prev = newNode;
  }

  appendleft(value) {
    const newNode = new Node(value);
    newNode.prev = this.dummyHead;
    newNode.next = this.dummyHead.next;
    this.dummyHead.next.prev = newNode;
    this.dummyHead.next = newNode;
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    const targetNode = this.dummyTail.prev;
    const prevNode = targetNode.prev;
    const value = targetNode.value;

    this.dummyTail.prev = prevNode;
    prevNode.next = this.dummyTail;

    return value;
  }

  popleft() {
    if (this.isEmpty()) {
      return -1;
    }
    const targetNode = this.dummyHead.next;
    const nextNode = targetNode.next;
    const value = targetNode.value;

    this.dummyHead.next = nextNode;
    nextNode.prev = this.dummyHead;

    return value;
  }
}

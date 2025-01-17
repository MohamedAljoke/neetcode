class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyListNode(-1);
    this.tail = new DoublyListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insertHead(val) {
    let newNode = new DoublyListNode(val);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  insertTail(val) {
    let newNode = new DoublyListNode(val);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  get(index) {
    let pointer = 0;
    let linkedListPointer = this.head.next;

    while (pointer !== index && linkedListPointer !== this.tail) {
      pointer++;
      linkedListPointer = linkedListPointer.next;
    }

    if (linkedListPointer === this.tail) {
      return null;
    }
    return linkedListPointer.val;
  }

  delete(index) {
    let pointer = 0;
    let listPointer = this.head.next;
    while (listPointer && pointer <= index) {
      pointer++;
      listPointer = listPointer.next;
    }
    if (!listPointer === this.tail) {
      return null;
    }
    listPointer.prev.next = listPointer.next;
    listPointer.next.prev = listPointer.prev;
    return listPointer.val;
  }

  addAtIndex(index, val) {
    let newNode = new DoublyListNode(val);
    let pointer = 0;
    let listPointer = this.head.next;

    while (pointer <= index && listPointer) {
      pointer++;
      listPointer = listPointer.next;
    }

    newNode.prev = listPointer.prev;
    newNode.next = listPointer;
    listPointer.prev.next = newNode;
    listPointer.prev = newNode;
  }
}

const list = new DoublyLinkedList();

list.insertHead(1);
list.insertHead(3);
list.insertTail(4);
list.get(2);
list.delete(1);
// console.log(list.head);

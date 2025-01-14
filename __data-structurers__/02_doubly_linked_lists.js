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

  insertFront(val) {
    let curr = new DoublyListNode(val);
    curr.next = this.head;
    this.head.prev = curr;
    this.head = curr;
  }
  insertEnd(val) {
    let newNode = new DoublyListNode(val);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  print() {
    let curr = this.head;
    let s = "";
    while (curr != this.tail) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertFront(3);
doublyLinkedList.insertFront(4);
doublyLinkedList.insertFront(5);
doublyLinkedList.insertFront(6);
doublyLinkedList.print();

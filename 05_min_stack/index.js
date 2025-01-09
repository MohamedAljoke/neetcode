export class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack[this.stack.length] = val;
  }
  pop() {
    const netStack = [];
    for (let i = 0; i < this.stack.length - 1; i++) {
      netStack[i] = this.stack[i];
    }
    this.stack = netStack;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    let min = this.stack[0];
    for (let i = 1; i <= this.stack.length; i++) {
      if (min > this.stack[i]) {
        min = this.stack[i];
      }
    }
    return min;
  }
}

const stackClass = new MinStack();

const res = stackClass.push(1);
stackClass.push(1);
stackClass.push(2);
stackClass.push(0);
stackClass.push(3);
stackClass.push(0);
stackClass.push(5);
const top = stackClass.top();
const min = stackClass.getMin();
console.log(top, min);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

// myStack.push('udemy');
// myStack.push('discord');
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());
//Discord
//Udemy
//google
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
myStack.peek();
myStack.pop();
myStack.pop();
console.log(myStack);

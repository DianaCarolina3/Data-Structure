//top
//3
//2
//1
//bottom

// stacks: el ultimo en entrar es el primero en salir

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  //peek: selecciona un elemento en este caso el ultimo en entrar y el primero en salir
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length === 0) {
      return undefined;
    } else if(this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      const lastPointer = this.top.next;
      this.top = lastPointer;
    }
    this.length--;
    return this;
  }
}
const myStack = new Stack()
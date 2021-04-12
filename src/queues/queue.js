//top
//1
//2
//3
//bottom

//Queues: el primero en llegar es el primero en salir
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //peek: toma el primer elemnto de la linea
  peek() {
    return this.first;
  }
  //enqueue: agrega elemento al final de la linea
  enqueue(value) {
    const newNode = new Node(value)
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  //dequeue: remueve al primer elemento de la linea
  dequeue() {
    if(this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const nextPoint = this.first.next
      this.first = nextPoint
    }
    this.length--;
    return this;
  }
}
const myQueue = new Queue()

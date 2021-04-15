class Node {
  constructor (value) {
    this.value = value;
    this.next= null
  }
}

class mySingly {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      console.log("added in the end")
      return this.append(value);
    }
    const newNode = new Node(value);
    const previusPointer = this.getIndex(index - 1);
    const holdingPointer = previusPointer.next;
    previusPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  remove(index) {
    if (index > this.length) {
      console.log(`Node ${index} no found`)
      return undefined;
    }
    const previusNode = this.getIndex(index - 1);
    const nextNode = this.getIndex(index - 1);
    previusNode.next = nextNode;
    this.length--;
    return this;
  }
  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
const SinglyLinked = new mySingly(1)


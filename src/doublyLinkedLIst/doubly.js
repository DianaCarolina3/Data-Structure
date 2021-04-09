// Doubly linked list: tiene prev, value y next
// p 1 n - p 2 n - p 3 n - p 4 n
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class MyDoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       prev: null
//     }
//     this.tail = this.head;
//     this.lenght = 0;
//   }

//   //append node to end
//   append(value) {
//       const newNode = new Node(value);
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//   }

//   //Add value at startup
//   prepend(value) {
//     const newNode = new Node(value);
//     this.head.prev = newNode;
//     newNode.next = this.head;
//     this.head = newNode;
//     this.lenght++;
//     return this;
//   }
//   //add value in medio
//   insert(index, value) {
//     if(index >= this.length) {
//       console.log(`added to the end`)
//       return this.append(value);
//     } else if (index === 0) {
//       return this.prepend(value);
//     }

//     const newNode = new Node(value);
//     const previusPointer = this.getNodeIndex(index - 1);
//     const holdingPointer = previusPointer.next;
//     newNode.prev = previusPointer
//     newNode.next = holdingPointer;
//     previusPointer.next = newNode;
//     holdingPointer.prev = newNode
//     this.length++;
//     return this;
//   }
//     //search node
//     getNodeIndex(index) {
//       let counter = 0;
//       let currentNode = this.head;
//       while (counter !== index) {
//           currentNode = currentNode.next;
//           counter++;
//       }
//       return currentNode;
//     }
// }
// let myDoublyLinkedList = new MyDoublyLinkedList(1);

class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 0;
  }
  //append: add value to end
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode;
    this.length++;
    return this;
  }
  //prepend: add value to startup
  prepend(value) {
    const newNode = new Node(value);
    newNode.prev = this.head;
    this.head.next = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  //insert: add value between the list
  insert(index, value) {
    if(index > this.length) {
      console.log(`add to the end`)
      return this.append(value);
    } else if (index === 0) {
      console.log(`Invalid`)
      return undefined;
    }

    const newNode = new Node(value);
    const previusPointer = this.getTheIndex(index - 1);
    const holdingPointer = previusPointer.next;
    newNode.prev = previusPointer
    newNode.next = holdingPointer;
    previusPointer.next = newNode;
    holdingPointer.prev = newNode;
    this.length++;
    return this;
  }
  //delete: delete value
  remove(index) {
    if(index > this.length) {
      return undefined;
    } else if (index === 0) {
      return undefined;
    }

    const previusPointer = this.getTheIndex(index - 1);
    const holdingPointer = this.getTheIndex(index + 1);
    previusPointer.next = holdingPointer;
    this.length--;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
let myDoublyLinkedList = new MyDoublyLinkedList(1);
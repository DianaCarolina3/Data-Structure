// 1 --> 2 --> 3 --> 4 --> null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

//singlu list: tiene el value y el next que se une al otro nodo

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class mySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 0;
  }

  //agrega nodo al final
  append(value) {
    const newNode = new Node(value);
    //anida el nodo a next: null
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this;
  }
  //agrega nodo al inicio
  prepend(value) {
    const newNode = new Node (value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  //inserta en em medio o entre el objeto
  insert(index, value) {
    //si el item es mayor o igual a la longitud se agrega al final
    if(index >= this.length) {
      console.log(`Added to the end`)
      return this.append(value);
    }

    const newNode = new Node (value)
    //getTheIndex para buscar el index en la lista
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }
  //eliminar nodo
    remove(index) {
      const previusPointer = this.getTheIndex(index - 1);
      const holdingPointer = this.getTheIndex(index + 1);
      previusPointer.next = holdingPointer;

      this.length--;
      return this;
  }
  //busqueda del nodo
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
let myLinkedList = new mySinglyLinkedList(1)

//Binary search tress: el root se divide en ramificaciones
//izquierda disminuye , derecha aumenta

  //        10
  //     4       20
  //   2   8   17  170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTreee {
  constructor() {
    this.root = null;
  }
  //insert: agrega value
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //value menor a root entonces...
        //de lo contrario si value mayor a root entonces ...
        if (value < currentNode.value) {
          //si no hay value a la izquierda
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //si no hay value a la derecha
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  // search: regresar node dado
  search(value) {
    let node = this.root;
    while (node && node.value != value) {
        if (value < node.value) {
          node = node.left;
        } else if (value > node.value) {
          node = node.right;
      }
    }
    if (!node) {
      console.log(`no found ${value}`)
      return undefined;
    }
    return node;
  }
}
const tree = new BinarySearchTreee();
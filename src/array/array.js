// const array = ["Diego", "Karen", "Sofia"];

//Array dinamico:el memory slot guarda los elementos y tiene el doble del tamaño que le pasemos por si crece mas el array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //index = numero del elemento que necesito que me regrese guardado en data
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.orderIndex(index);
    return item;
  }
  orderIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length--;
  }
  shift() {
    const item = this.data[0]
    delete this.data[0]
    this.shiftIndex()
    // this.delete(0) tambien funciona
    return item
  }
  shiftIndex() {
    for(let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--;
  }
  unshift(item) {
    this.unshiftIndex()
    this.data[0] = item
    this.length++
    return this.data
  }
  unshiftIndex() {
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
  }

}
const myArray = new MyArray();
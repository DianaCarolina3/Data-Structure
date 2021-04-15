// HashTable: se accese al value mediante al key,
// primero pasa por hash function --> address --> buctket que contiene(key,value)
//es estatico ya que asignamos tamaño

class HashTable {
  constructor(size) {
    //size pasa el numero de espacios libres el hash table en el buckets
    this.data = new Array(size);
  }
  //la functon hashMethod genera un valor ramdom para en el hash
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //charCodeAt: genera un valor random para key y asi guardar en memory
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // key:0 , value:1
    //pasamos el key para que regrese el hash
    const address = this.hashMethod(key)
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    // obtengo la direccion
    const currentBucket = this.data[address];
    // obtengo el bucket
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0]) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  getAll() {
    //[]: para almacenar los keys
    let keys = [];
    this.data.forEach(data => {
      //key
      keys.push(data[0][0])
      //value
      keys.push(data[0][1])
    })
    return keys;
  }
  delete(key) {
    // obtengo la direccion
    const address = this.hashMethod(key);
    // obtengo el bucket
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          delete currentBucket[i][0]
          delete currentBucket[i][1]
          return true
        }
      }
    }
    return false;
  }

}
const myHashTable = new HashTable(50);

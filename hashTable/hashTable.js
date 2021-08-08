class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // nuestra funcions generadora de hash
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Agregamos un nuevo valor, en una posicion aleatoria
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // El metodo que nos devuelve el valor de nuestro string
  get(key) {
    const adrees = this.hashMethod(key);
    const currentBucket = this.data[adrees];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // metodo delete
  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const element = currentBucket[i][1];
          delete currentBucket[i][1];
          return element;
        }
      }
    }
    return undefined;
  }

  // metodo para obtener todos los keys

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);

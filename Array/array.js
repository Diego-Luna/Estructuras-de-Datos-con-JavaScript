// la manera normal de crear un array;
// const array = ["Diego", "Leo", "Hazel"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  // agregamos un item
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // borramos el ultimo elemento de un array
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length - 1;
  }
}

const myArray = new MyArray();

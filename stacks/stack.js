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

  // creamos nuestro metodo, para tomar el ultimo valor del stack
  peek() {
    return this.top;
  }

  // agregamos
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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

  // eliminar el ultimo elemento
  pop() {
    if (!this.length) {
      console.error("There is no nodes in the stack.");
      return;
    }
    const topNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return topNode;
  }
}

const myStack = new Stack();

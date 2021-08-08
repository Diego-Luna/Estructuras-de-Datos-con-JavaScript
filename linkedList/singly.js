// ejemplo
// 1 --> 2 --> 3 --> 4 --> 5 --> null

// ejemplo en un objeto
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

// la case de nuestros nodos
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    // tenemos un conteo de los elemtos que contiene
    this.length = 1;
  }

  // nuestro metodo para agregar elemtos al final.
  append(value) {
    const newNode = new Node(value);

    // agregamos un nuevo nodo
    this.tail.next = newNode;

    // ponemos el nuevo nodo en la cola
    this.tail = newNode;

    this.length++;

    return this;
  }

  // agregamos un elemetno en la cabeza
  prepend(value) {
    const newNode = new Node(value);

    // agregamos el node al a cabeza
    newNode.next = this.head;

    // lo colocamos en la lista
    this.head = newNode;

    this.length++;

    return this;
  }

  // incertamos un nuevo nodo, en cualcuier lugar
  insert(index, value) {
    // validamos si ponemos un index que no esiste
    if (index >= this.length) {
      //  lo ponemos el final de la lista
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  // nos va ayudar a buscar los nodos
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);

// prueva , con runner o en el navegador

mySinglyLinkedList;

mySinglyLinkedList.append(2);
mySinglyLinkedList.append(3);

mySinglyLinkedList.prepend(0);

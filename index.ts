class Node<T> {
  data: T;
  next: Node<T> | null;
  
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;
  private last: Node<T> | null;
  length: number;
  
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }
  
  add(item: T) {
    const newNode = new Node(item);
  
    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
      
    } else if(this.last) {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    this.length++;
  }
  
  toArray() {
    const array: T[] = [];
    let node = this.head;
  
    while (node) {
      array.push(node.data);
      node = node.next;
    }
  
    return array;
  }
}

const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.toArray());
console.log(list.length);

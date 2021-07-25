class Node<T> {
  data: T;
  next: Node<T> | null;
  
  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export interface List<T> {
  length: number;
  toArray: () => T[];
  remove: (t: T) => T | null;
  add: (t: T) => number;
}

export class LinkedList<T> implements List<T> {
  private head: Node<T> | null;
  private last: Node<T> | null;
  private _length: number;
  
  constructor() {
    this.head = null;
    this.last = null;
    this._length = 0;
  }
  
  get length() {
    return this._length;
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
    
    this._length++;
    
    return this._length;
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
  
  remove(item: T) {
    if (!this.head) {
      return null;
    }
    
    if (this.head.data === item) {
      this.head = this.head.next;
      return item;
    }
    
    let prevNode = this.head;
    let currentNode = this.head.next;
    
    while (currentNode) {
      if (currentNode.data === item) {
        prevNode.next = currentNode.next;
        return item;
      }
      
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    
    return null;
  }
}

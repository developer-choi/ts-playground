import {List} from './list';

export class LinkedList<T> extends List<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  
  push(item: T): number {
    if (this.head === null && this.tail === null) {
      this.head = new Node(item);
      this.tail = this.head;
      this._length++;
      return this._length;
    }
  
    if(this.head !== null && this.tail !== null) {
      const node = new Node(item, this.tail);
      this.tail.next = node;
      this.tail = node;
      this._length++;
      return this._length;
    }
  
    throw Error('this.head and this.tail must both are null or both are not null.');
  }
  
  toArray(): T[] {
    const array = [] as T[];
    let node = this.head;
  
    while (node !== null) {
      array.push(node.data);
      node = node.next;
    }
  
    return array;
  }
}

class Node<T> {
  previous: Node<T> | null;
  next: Node<T> | null;
  data: T;
  
  constructor(data: T, previous: Node<T> | null = null, next: Node<T> | null = null) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

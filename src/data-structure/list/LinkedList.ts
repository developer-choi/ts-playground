import {List} from './list';

export class LinkedList<T> extends List<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  
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
  
    this.forEach(item => {
      array.push(item);
    });
    
    return array;
  }
  
  forEach(callback: (item: T, index: number, original: LinkedList<T>) => void): void {
    let node = this.head;
    let index = 0;
    
    while (node !== null) {
      callback(node.data, index, this);
      index++;
      node = node.next;
    }
  }
  concat(list: LinkedList<T>): LinkedList<T> {
    const newInstance = new LinkedList<T>();
    
    this.forEach(item => {
      newInstance.push(item);
    });
  
    list.forEach(item => {
      newInstance.push(item);
    });
  
    return newInstance;
  }
  
  map<R>(callback: (item: T, index: number, original: LinkedList<T>) => R): LinkedList<R> {
    const newInstance = new LinkedList<R>();
  
    this.forEach((item, index, original) => {
      newInstance.push(callback(item, index, original));
    });
  
    return newInstance;
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

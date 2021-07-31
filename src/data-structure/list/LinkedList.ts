import {List} from './list';

export class LinkedList<T> extends List<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  
  push(value: T): number {
    if (this.head === null && this.tail === null) {
      this.head = new Node(value);
      this.tail = this.head;
      this._length++;
      return this._length;
    }
  
    if(this.head !== null && this.tail !== null) {
      const node = new Node(value, this.tail);
      this.tail.next = node;
      this.tail = node;
      this._length++;
      return this._length;
    }
  
    throw Error('this.head and this.tail must both are null or both are not null.');
  }
  
  toArray(): T[] {
    const array = [] as T[];
  
    this.forEach(value => {
      array.push(value);
    });
    
    return array;
  }
  
  forEach(predicate: (value: T, index: number, original: LinkedList<T>) => void): void {
    let node = this.head;
    let index = 0;
    
    while (node !== null) {
      predicate(node.data, index, this);
      index++;
      node = node.next;
    }
  }
  concat(list: LinkedList<T>): LinkedList<T> {
    const newInstance = new LinkedList<T>();
    
    this.forEach(value => {
      newInstance.push(value);
    });
  
    list.forEach(value => {
      newInstance.push(value);
    });
  
    return newInstance;
  }
  
  map<R>(predicate: (value: T, index: number, original: LinkedList<T>) => R): LinkedList<R> {
    const newInstance = new LinkedList<R>();
  
    this.forEach((value, index, original) => {
      newInstance.push(predicate(value, index, original));
    });
  
    return newInstance;
  }
  
  slice(fromIndex = 0, toIndex = this.length): LinkedList<T> {
    const _fromIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;
    const _toIndex = toIndex >= 0 ? toIndex : this.length + toIndex;
    const newInstance = new LinkedList<T>();
    
    if (_fromIndex > this.length || _toIndex < 0) {
      return newInstance;
    }
    
    this.forEach((value, index) => {
      if(_fromIndex <= index && index < _toIndex) {
        newInstance.push(value);
      }
    });
    
    return newInstance;
  }
  
  filter(predicate: (value: T, index: number, original: List<T>) => boolean): LinkedList<T> {
    const newInstance = new LinkedList<T>();
  
    this.forEach((value, index, original) => {
      if (predicate(value, index, original)) {
        newInstance.push(value);
      }
    });
  
    return newInstance;
  }
  
  some(predicate: (value: T, index: number, original: List<T>) => boolean): boolean {
    let result: boolean = false;
    
    try {
      this.forEach((value, index, original) => {
        console.log('iterate', index);
        
        if (predicate(value, index, original)) {
          result = true;
          throw Error('Ignore this error.');
        }
      });
  
      return false;
    } catch (error) {
      if (result) {
        return true;
      } else {
        throw error;
      }
    }
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

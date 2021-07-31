import {Collection} from '../collection';

export interface Iterable<T> {
  forEach(callback: (item: T, index: number, original: List<T>) => void): void;
}

// What's the List? Umm...
export abstract class List<T> extends Collection<T> implements Iterable<T> {
  /**
   * The length property can be read outside.
   * And that must not be written outside.
   * And that can be written in Implementing List classes.
   * Therefore, the protected keyword will satisfy these visibility conditions.
   */
  protected _length = 0;
  
  /**
   * I think that all List have length properties.
   * so, the abstract class must have a length property.
   */
  get length() {
    return this._length;
  }
  
  abstract push(item: T): number;
  
  abstract toArray(): T[];
  
  abstract forEach(callback: (item: T, index: number, original: List<T>) => void): void;
  abstract map<R>(callback: (item: T, index: number, original: List<T>) => R): List<R>;
  abstract concat(list: List<T>): List<T>;
  
  abstract slice(fromIndex?: number, toIndex?: number): List<T>;
}

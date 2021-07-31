import {Collection} from '../collection';

export interface Iterable<T> {
  forEach(callback: (value: T, index: number, original: List<T>) => void): void;
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
  
  abstract push(value: T): number;
  
  abstract toArray(): T[];
  
  abstract forEach(predicate: (value: T, index: number, original: List<T>) => void): void;
  abstract map<R>(predicate: (value: T, index: number, original: List<T>) => R): List<R>;
  abstract concat(list: List<T>): List<T>;
  
  abstract slice(fromIndex?: number, toIndex?: number): List<T>;
  abstract filter(predicate: (value: T, index: number, original: List<T>) => boolean): List<T>;
  abstract some(predicate: (value: T, index: number, original: List<T>) => boolean): boolean;
  abstract every(predicate: (value: T, index: number, original: List<T>) => boolean): boolean;
  abstract find(predicate: (value: T, index: number, original: List<T>) => boolean): T | undefined;
  abstract findIndex(predicate: (value: T, index: number, original: List<T>) => boolean): number;
  abstract fill(value: T, fromIndex?: number, toIndex?: number): this;
  abstract get(index: number): T | undefined;
}

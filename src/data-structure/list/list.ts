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
  
  /**
   * The index parameter type for most Array methods is Optional.
   * And it is implemented to enable negative numbers.
   * So, I added it here so that the subclasses that extend this List class can calculate the negative index as a positive number.
   *
   * Also, I thought there was no reason to override this method in the subclass,
   * so I tried to add the final keyword, but I didn't because TypeScript didn't support the final class member.
   * https://github.com/microsoft/TypeScript/issues/8306
   */
  protected correctNegativeIndex(index = 0) {
    return index >= 0 ? index : this.length + index;
  };
}

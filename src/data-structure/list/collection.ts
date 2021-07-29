export abstract class Collection<T> {
  /**
   * I think that all collections have length properties.
   * so, the abstract class must have a length property.
   */
  get length() {
    return this._length;
  }
  
  /**
   * The length property can be read outside.
   * And that must not be written outside.
   * And that can be written in Implementing Collection classes.
   * Therefore, the protected keyword will satisfy these visibility conditions.
   */
  protected _length = 0;
}

// What's the List? Umm...
export abstract class List<T> extends Collection<T> {}
export interface Iterable<T> {
  forEach: (callback: (item: T, index: number, original: List<T>) => void) => void;
  concat: (...item: T[]) => List<T>;
  map: <R>(callback: (item: T, index: number, original: List<T>) => R) => List<R>;
}

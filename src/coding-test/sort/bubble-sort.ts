function bubbleSort<T>(array: T[], compareFunction: (a: T, b: T) => number): T[] {
  const _array = [...array];
  const sortCount = array.length - 1;
  
  for (let i = sortCount; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compareFunction(_array[j], _array[j + 1]) > 0) {
        const temp = _array[j + 1];
        _array[j + 1] = _array[j];
        _array[j] = temp;
      }
    }
  }
  
  return _array;
}

function ascendantCompare(a: number, b: number) {
  return a - b;
}

function descendantCompare(a: number, b: number) {
  return b - a;
}

console.log(bubbleSort([1, 9, 2, 8, 3, 7, 4, 6, 5], ascendantCompare));
console.log(bubbleSort([1, 9, 2, 8, 3, 7, 4, 6, 5], descendantCompare));

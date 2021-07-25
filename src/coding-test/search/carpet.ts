export {};

// https://programmers.co.kr/learn/courses/30/lessons/42842
const TOTAL_CORNER = 4;

function getSymmetryArray<T>(array: T[]): T[][] {
  const length = array.length;
  const isOdd = length % 2 === 1;
  const result: T[][] = [];
  
  for (let i = 0; i < length; i++) {
    
    if (i === Math.floor(length / 2)) {
      if (isOdd) {
        result.push([array[i], array[i]]);
        break;
      } else {
        break;
      }
    }
    
    result.push([array[i], array[length - i - 1]]);
  }
  
  return result;
}

function getDivisors(value: number): number[] {
  if (value === 0) {
    return [];
  }
  
  const array: number[] = [1];
  
  for (let i = 2; i <= value; i++) {
    if (value % i === 0) {
      array.push(i);
    }
  }
  
  return array;
}

function getFitDivisor(divisors: number[], edgeTotalCount: number, innerCount: number): {width: number, height: number} | undefined {
  const squares = getSymmetryArray(divisors);
  const result = squares.find(([width, height]) => {
    if (width < 3 || height < 3) {
      return false;
    }
    
    const _edgeTotalCount = (width * 2) + (height * 2) - TOTAL_CORNER;
    if (edgeTotalCount !== _edgeTotalCount) {
      return false;
    }
    const _innerCount = (width - 2) * (height - 2);
    return _innerCount === innerCount;
  });
  
  if (result) {
    return {width: result[0], height: result[1]};
  } else {
    return undefined;
  }
}

function solution(brown: number, yellow: number) {
  const divisors = getDivisors(brown + yellow);
  const result = getFitDivisor(divisors, brown, yellow);
  return result ? [result.width, result.height].sort((a, b) => b - a) : [];
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

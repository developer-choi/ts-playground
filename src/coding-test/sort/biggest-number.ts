export {};

// https://programmers.co.kr/learn/courses/30/lessons/42746
// 테스트 케이스는 통과했으나 정확도 0점

function solution(numbers: number[]) {
  return [...numbers].sort((a, b) => {
    const maxLength = Math.max(a, b).toString().length;
    const defaultA = Number(a.toString()[0]);
    const defaultB = Number(b.toString()[0]);
    const aLength = a.toString().length;
    const bLength = b.toString().length;
    
    for (let i = 0; i < maxLength; i++) {
      const aValue = i >= aLength ? defaultA : Number(a.toString()[i]);
      const bValue = i >= bLength ? defaultB : Number(b.toString()[i]);
      
      if (aValue > bValue) {
        return -1;
        
      } else if (bValue < aValue) {
        return 1;
      }
    }
    return 0;
  }).join('');
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));

export {};

// https://programmers.co.kr/learn/courses/30/lessons/42840

function aFunc(index: number) {
  return index % 5 + 1;
}

function bFunc(index: number) {
  if (index % 8 === 1) {
    return 1;
  }
  
  if (index % 8 === 3) {
    return 3;
  }
  
  if (index % 8 === 5) {
    return 4;
  }
  
  if (index % 8 === 7) {
    return 5;
  }
  
  return 2;
}

function cFunc(index: number) {
  if (index % 10 < 2) {
    return 3;
  }
  if (index % 10 < 4) {
    return 1;
  }
  if (index % 10 < 6) {
    return 2;
  }
  if (index % 10 < 8) {
    return 4;
  }
  return 5;
}

function getAnswerLength(func: (index: number) => number, answers: number[]) {
  return answers.reduce((a, b, index) => {
    if (func(index) === b) {
      return ++a;
    }
    
    return a;
  }, 0);
}

function solution(answers: number[]) {
  const aAnswerLength = {value: getAnswerLength(aFunc, answers), magic: 1};
  const bAnswerLength = {value: getAnswerLength(bFunc, answers), magic: 2};
  const cAnswerLength = {value: getAnswerLength(cFunc, answers), magic: 3};
  const array = [aAnswerLength, bAnswerLength, cAnswerLength];
  const maxValue = Math.max(...array.map(({value}) => value));
  const topMagicArray = array.reduce<number[]>((a, b) => {
    if (b.value === maxValue) {
      return a.concat(b.magic);
    }
    return a;
  }, []);
  return topMagicArray.sort();
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

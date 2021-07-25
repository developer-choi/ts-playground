export {};

// https://programmers.co.kr/learn/courses/30/lessons/42748
type Command = [startOrder: number, endOrder: number, pickOrder: number];

function subSolution(array: number[], [start, end, pick]: Command) {
  return array.slice(start - 1, end).sort((a, b) => a - b)[pick - 1];
}

function solution(array: number[], commands: Command[]) {
  return commands.map(command => subSolution(array, command));
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	));

export {};

//https://okky.kr/article/890116
function solution(membershipId: string): number {
  const sum = membershipId.split('').reduce((a, b) => a + Number(b), 0);
  if (sum >= 10) {
    return solution(sum.toString());
  } else {
    return sum;
  }
}

console.log(solution('55555'));
console.log(solution('1'));
console.log(solution('19'));

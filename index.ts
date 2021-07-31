import {LinkedList} from './src/data-structure/list/LinkedList';

const numberList = new LinkedList<number>();
numberList.push(1);
numberList.push(2);
numberList.push(3);
numberList.push(4);
numberList.push(5);
numberList.push(6);

console.log(numberList.slice() === numberList);
console.log(numberList.slice().toArray());
console.log(numberList.slice(0, 6).toArray());
console.log(numberList.slice(1, 6).toArray());
console.log(numberList.slice(5, 6).toArray());
console.log(numberList.slice(7, 1).toArray());
console.log(numberList.slice(2).toArray());
console.log(numberList.slice(-2).toArray());
console.log(numberList.slice(-4, -2).toArray());

import {LinkedList} from './src/data-structure/list/LinkedList';

const array = new LinkedList<number>();
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);

console.log(array.findIndex(value => value === 2));
console.log(array.get(2));

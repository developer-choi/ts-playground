import {LinkedList} from './src/data-structure/list/LinkedList';

const array = new LinkedList<number>();
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);
array.push(0);

console.log(array.fill(100).toArray());
console.log(array.fill(99, 10, 5).toArray());
console.log(array.fill(98, 5, 7).toArray());
console.log(array.fill(97, 2).toArray());
console.log(array.fill(96, -2).toArray());
console.log(array.fill(95, -5, -7).toArray());


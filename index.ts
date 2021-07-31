import {LinkedList} from './src/data-structure/list/LinkedList';

const numberList = new LinkedList<number>();
numberList.push(1);
numberList.push(2);
numberList.push(3);
numberList.push(4);
numberList.push(5);
numberList.push(6);

console.log(numberList.filter(value => value % 2 === 0).toArray());

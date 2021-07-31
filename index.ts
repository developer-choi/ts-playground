import {LinkedList} from './src/data-structure/list/LinkedList';

const list = new LinkedList<string>();
list.push('123');
list.push('123');
list.push('123');
console.log(list.toArray());

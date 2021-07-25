import {LinkedList} from './src/data-structure/list/LinkedList';

const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.remove(4), list.toArray());
console.log(list.remove(3), list.toArray());
console.log(list.remove(2), list.toArray());
console.log(list.remove(1), list.toArray());

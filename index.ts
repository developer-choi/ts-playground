import {LinkedList} from './src/data-structure/list/LinkedList';

/*******************************************/

const englishList = new LinkedList<string>();
const koreanList = new LinkedList<string>();

englishList.push('Apple');
englishList.push('Banana');

koreanList.push('사과');
koreanList.push('바나나');

const conactList = koreanList.concat(englishList);
console.log(koreanList.toArray());
console.log(englishList.toArray());
console.log(conactList.toArray());
console.log(koreanList === conactList);
console.log(englishList === conactList);
console.log(conactList.length, koreanList.length, englishList.length);

/*********************************************/

const numberList = new LinkedList<number>();
numberList.push(1);
numberList.push(2);
numberList.push(3);
numberList.push(4);
numberList.forEach(value => {
  console.log(value);
});

const doubleList = numberList.map(value => value * 2);
console.log(doubleList.toArray());
console.log(doubleList === numberList);
console.log(doubleList.length, numberList.length);

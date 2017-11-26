'use strict'


/*字符串有原生Symbol.iterator借口*/
let someString = 'Hello world!';

console.log(someString[Symbol.iterator]);

let iterator = someString[Symbol.iterator]();
// console.log(iterator.next);

let it = iterator.next();

while(!it.done){
    console.log(it.value);
    it = iterator.next();
}
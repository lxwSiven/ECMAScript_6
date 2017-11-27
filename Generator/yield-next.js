'use strict'

// function* generator() {
//     yield 'hello';
//     yield 'world';
//     return '!';
// }
//
// let hw = generator();
//
// let it = hw.next();
//
// while(!it.done){
//     console.log(it.value);
//     it = hw.next();
// }

function* demo() {
    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
}

var generator = demo();

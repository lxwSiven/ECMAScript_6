'use strict'

function* generator() {
    yield 1;
    yield* [2,3,4];
    yield 5;
};

let iterator = generator();
let it = iterator.next();

while(!it.done){
    console.log(it.value);
    it = iterator.next();
}
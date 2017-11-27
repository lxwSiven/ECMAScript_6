'use strict'

function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';
    // for(let v of foo()){
    //     console.log(v);
    // }
    // 两种写法效果一致
    yield* foo();

    yield 'y';
}

for(let v of bar()){
    console.log(v);
}
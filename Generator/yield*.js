'use strict'

// function* foo() {
//     yield 'a';
//     yield 'b';
// }
//
// function* bar() {
//     yield 'x';
//     // for(let v of foo()){
//     //     console.log(v);
//     // }
//     // 两种写法效果一致
//     yield* foo();
//     // console.log(x);
//     yield 'y';
// }
//
// for(let v of bar()){
//     console.log(v);
// }


function* genFuncWithReturn(){
    yield 'a';
    yield 'b';
    return 'hello world!';
}
function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
}

// logReturned(genFuncWithReturn())
// 返回一个遍历器对象

for (let x of logReturned(genFuncWithReturn())){
    console.log(x);
}
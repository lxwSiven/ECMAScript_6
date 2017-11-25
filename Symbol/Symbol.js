'use strict'

// let s = Symbol();
// console.log(typeof s); // symbol;

// let s1 = Symbol('lxw');
// let s2 = Symbol('lxx');
// console.log(s1);  // Symbol(lxw)
// console.log(s2);  // Symbol(lxx)
// console.log(s1.toString());  // Symbol(lxw)
// console.log(s2.toString());  // Symbol(lxx)

// Symbol()参数是对象，自动调用对象toString方法。
// const obj = {
//     toString(){
//         return 'abc';
//     }
//
// };
// const sym = Symbol(obj);
// console.log(sym); // Symbol(abc)

// let s1 = Symbol('lxw');
// let s2 = Symbol('lxw');
// console.log(s1 === s2); // false
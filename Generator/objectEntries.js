'use strict'

function* objectEntries(obj) {
    // let propKeys1 = Object.keys(obj);

    let propKeys = Reflect.ownKeys(obj);

    // console.log(propKeys1);
    /*
     *  都打印[ 'first', 'last']
    */

    for(let key of propKeys){
        yield [key, obj[key]];
    }

}

let jane = {first: 'jane', last:'Doe'};

let generator = objectEntries(jane);

// console.log(generator.next());
// console.log(generator.next());
// { value: [ 'first', 'jane' ], done: false }
// { value: [ 'last', 'Doe' ], done: false }

for (let [key, value] of objectEntries(jane)){
    console.log(`${key}: ${value}`);
}

//for of 语句取得的是generator.next()中的value值;
// first: jane
// last: Doe

// 另一种实现方法是在jane对象中添加Symbol.iterator属性,值为objectEntries函数
// jane[Symbol.iterator] = objectEntries;
// for (let [key, value] of jane){
//     console.log(`${key}: ${value}`);
// };
'use strict'

// const set = new Set();
//
// [2,3,3,2,4,5,6,5].forEach(item => set.add(item));
//
// console.log(set);
// Set { 2, 3, 4, 5, 6 }

// for (let i of set){
//    console.log(i);
// }

//Set结构不添加重复的值,构造函数可接收数组作为参数
// const set = new Set([2,3,3,2,4,5,6,5]);
// [...set] //what?
// console.log(set); //Set { 2, 3, 4, 5, 6 }
// console.log(set.size);  //5

//数组去重 Array.from()可以将Set结构转为数组
// function dedupe(array){
//     return Array.from(new Set(array));
// };
// console.log(dedupe([2, 3, 3, 2, 4, 5, 6, 5]));
// [ 2, 3, 4, 5, 6 ]



// 5和'5'不同,NAN在Set结构中相等，两个对象总是不等
// const set = new Set();
// set.add(5);
// set.add('5');
// set.add({});
// set.add({});
// console.log(set); // Set {5, '5', {}, {} }

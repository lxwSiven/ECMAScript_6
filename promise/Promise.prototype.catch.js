'use strict'

//写法1：
const promise1 = new Promise ((resolve, reject) => {
    try {
        throw new Error('some error');
    } catch (e) {
        reject(e);
    }
});

//promise1   //reject()捕捉异常
//    .then(null, function(err){
//        console.log(err);
//    });
promise1     //catch()捕捉异
    .catch(function(err){
        console.log(err);
    })

//写法2：
const promise2 = new Promise((resolve, reject) => {
    reject(new Error('SOME ERROR!'));
    //reject()作用相当于抛出异常
});

promise2
    .catch((err) => {
        console.log(err);
    });


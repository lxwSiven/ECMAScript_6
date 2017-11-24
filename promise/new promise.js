'use strict'


var promise = new Promise(function (resolve, reject) {
    resolve();
});

console.log(promise.then());//promise状态是pedding
//Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then()
    .catch(function(err){
        console.log(err);
    });


function timeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
//Promise 新建后会立即执行

timeout(200)
    .then((value) => {
        console.log(value);
    });
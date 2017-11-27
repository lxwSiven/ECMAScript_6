'use strict'

function* foo(x){
    var y = 2*(yield (x+1));
    var z = yield (y/3);
    return (x+y+z);
}

var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

var b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));
/*
* next(arg)中的参数arg作为上一个yield表达式的返回值
* yield表达式本身没有返回值。
* */


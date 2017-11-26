'use strict'

function Obj (value) {
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function () {
    var iterator = {next: next}; // 定义iterator对象

    var current = this;

    function next() {
        if(current){
            var value = current.value;
            current = current.next;
            return {value: value, done: false};
        } else {
            return {done: true};
        }
    }

    return iterator;
    //返回遍历器对象并调用遍历器对象的next()方法;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for( var i of one){
    console.log(i);
}

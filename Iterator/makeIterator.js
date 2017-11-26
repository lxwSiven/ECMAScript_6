'use strict'

let it = makeIterator(['a', 'b']);

let obj = it.next();

while(!obj.done) {
    console.log(obj.value);
    obj = it.next();
}

function makeIterator(array) {
    var nextIndex = 0; //闭包
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false}:
                {value: undefined, done: true};
        }
    };
}
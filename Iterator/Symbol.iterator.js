'use strict'

// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
//
// let obj = iter.next();
//
// while(!obj.done){
//     console.log(obj.value);
//     obj = iter.next();
// }

class RangeIterator {
    constructor (start, stop) {
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator]() {return this;}

    next() {
        var value = this.value;
        if (value < this.stop){
            this.value ++ ;
            return {value:value, done: false};
        }
        return {value:undefined, done: true};
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop);
}

function iter() {
    for (var value of range(0, 5)){
        console.log(value);
        /*0,1,2,3,4*/
    }
}

iter();


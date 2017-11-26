'use strict'

var someString = new String('Hello world!');

console.log([...someString]);
// [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

/*自定义Symbol.iterator方法，覆盖原生接口方法*/

someString[Symbol.iterator] = function (){
    return {
        next: function () {
            console.log(this);
            console.log(this._first);
            if(this._first){
                this._first = false;
                return {value: 'lxw', done:false};
            } else {
                return {done: true};
            }
        },
        _first:true

    }
}
console.log([...someString]);

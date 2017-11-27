'use strict'

function* fabonacci() {
    let [prev, curr] = [0,1];
    console.log(prev);
    console.log(curr);
    while(1){
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let value of fabonacci()) {
    if(value>1000) break;
    console.log(value);
}
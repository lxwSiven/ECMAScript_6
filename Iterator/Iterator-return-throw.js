'use strict'

// TypeError: readLineSync(...) is not iterable
function readLineSync(file) {
    return {
        next: function () {
            return {done: false};
        },
        return: function () {
            file.close();
            return {done: true}
        }
    }
}

for(let line of readLineSync('./test.txt')){
    console.log(line);
    break;
}
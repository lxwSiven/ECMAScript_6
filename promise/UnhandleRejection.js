'use strict'

const someAsyncThing = () => {
    return new Promise ((resolve, reject) => {
        resolve(x+2);
    });
};

someAsyncThing()
    .then(() => {
        console.log('everything is great');
    });

setTimeout(() => { console.log(123); }, 2000);

process.on('unhandledRejection', (err, pro) => {
    console.log(pro);
    console.log(err);
});
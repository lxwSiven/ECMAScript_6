const promise = new Promise((resolve, reject) => {
    return resolve();
    console.log('Hello');
});

promise
    .then(() => {
        console.log('resolved');
    })
    .then(() => {
        console.log('sigma');
    });

console.log('Hi');
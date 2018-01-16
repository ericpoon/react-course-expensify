const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'panzhiqi',
        //     age: 21,
        // });
        reject('Something went wrong!');
    }, 300);
});

console.log('before');

promise
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

console.log('after');

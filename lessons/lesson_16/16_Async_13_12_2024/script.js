// console.log("Start");

// setTimeout(function () {
//   console.log(5);
// }, 7000);

// console.log("Finish");

// let res = giveFiveAfterSevenSeconds();
// console.log(res);

// function giveFiveAfterSevenSeconds() {
//   setTimeout(function () {
//     return 5;
//   }, 100);
// }

// res = giveFiveAfterSevenSeconds();
// console.log(res);

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject('Mistake'), 1000);
});

promise
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
    .finally(() => console.log('End'))
    
    
    

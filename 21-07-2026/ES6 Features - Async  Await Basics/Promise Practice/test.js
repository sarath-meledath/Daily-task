// Create a Promise that waits for 3 seconds and then resolves with the message:
// "Data Loaded Successfully"
// Display the result using:
// .then()
// .catch()




// const dataPromise = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve("Data Loaded Successfully");
//     }, 3000);
// });

// dataPromise.then(function (message) {
//     console.log(message);
// });

// dataPromise.catch(function (error) {
//     console.error(error);
// });




// Modify the Promise so that it rejects with the message:
// "Something went wrong!"
// Handle the error appropriately.




// const dataPromise = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         reject("Something went wrong!");
//     }, 3000);
// });

// dataPromise.then(function (message) {
//     console.log(message);
// });

// dataPromise.catch(function (error) {
//     console.log(error);
// });




// What will be printed?
// const promise = new Promise((resolve) => {
// setTimeout(() => resolve("JavaScript"), 1000);
// });
// promise.then(result => console.log(result));
// console.log("Learning...");
// Explain the order of execution.




// output: Learning...
//       : JavaScript
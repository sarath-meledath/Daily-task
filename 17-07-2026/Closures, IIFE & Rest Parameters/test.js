// Counter with Closure — Write makeCounter() that returns a function which increases and remembers a count every time it’s called

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// IIFE Welcome Message — Write an IIFE that prints a welcome message the moment the script runs, with no separate function call needed

(function() {
    console.log("Welcome to the page!");
})();

// Sum with Rest Parameters — Write sum(...numbers) that adds up any number of arguments passed to it.

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(sum(10, 20));
console.log(sum(5, 10, 15, 20));
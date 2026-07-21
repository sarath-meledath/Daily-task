// Prime Checker — Write isPrime(n) that returns true if a number is prime, false otherwise. A classic warm-up problem.

function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }

    }

    return true;
    
}

console.log(isPrime(9));

// Leap Year Checker — Write isLeapYear(year) that checks whether a given year is a leap year.

function isLeapYear(year) {

    if (year % 4 === 0) {
        return true;
    }

    if (year % 100 === 0) {
        return false;
    }

    if(year % 400 === 0) {
        return true;
    }

    return false
}

console.log(isLeapYear(2000));

// Arrow Function Rewrite — Pick any two functions from the previous slide and rewrite them using arrow function syntax.

const isEven = (n) => {
    return n % 2 === 0;
};

let evenCheck = isEven(7);

console.log(evenCheck);

// Default Greeting — Write greetUser(name = "Guest") with a default parameter. Call it with and without an argument.

function greetUser(name = "Guest") {
    console.log("hello " + name);
}

greetUser();
greetUser("John");

// Scope Demo — Declare a variable with the same name inside two different functions, and show that they don’t clash.

function firstFunction( ) {
    let x = 5;
    console.log(x);
}

function secondFunction( ) {
    let x = 10;
    console.log(x);
}

firstFunction();
secondFunction();



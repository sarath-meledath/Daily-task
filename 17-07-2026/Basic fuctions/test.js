// Add Two Numbers — Write add(a, b) that returns the sum.

function add(a, b) {
    return a + b;
}

let result = add(5, 3);

console.log(result); 

// Subtract Two Numbers — Write subtract(a, b) that returns the difference

function subtract(a, b) {
    return a - b;
}

let difference = subtract(10, 4);

console.log(difference);

// Square a Number — Write square(n) that returns n multiplied by itself.

function square(n) {
    return n * n;
}

let squareValve = square(6);

console.log(squareValve);

// Even or Odd — Write isEven(n) that returns true or false.

function isEven(n) {
    return n % 2 === 0;
}

let evenChack = isEven(8);

console.log(evenChack);

// Positive, Negative, or Zero — Write checkNumber(n) that returns which of the three a number is

function checkNumber(n) {
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let numberCheck = checkNumber(8);

console.log(numberCheck);

// Largest of Three — Write largest(a, b, c) that returns the biggest of three numbers

function largest(a, b, c) {
    return Math.max(a, b, c);
}

let largestNumber = largest(5, 11, 5)

console.log(largestNumber);

//Rectangle Area — Write rectangleArea(length, width) that returns the area.

function rectangleArea(length, width) {
    return length * width;
}

let area = rectangleArea(6, 3);

console.log(area);

// Print Your Name — Write printName() that simply logs your name to the console.

function printName() {
    console.log("John Doe");
}

printName();


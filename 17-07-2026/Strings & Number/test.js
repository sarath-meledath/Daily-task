// Palindrome Check — Check if a given string reads the same forwards and backwards

let string = "malayalam";
let palindrome = "";

for (let i = string.length - 1; i >= 0; i--) {
    palindrome = palindrome + string[i];
}

if(string === palindrome) {
    console.log(string + " is a palindrome");
} else {
    console.log(string + " is not a palindrome");
}


// Vowel Counter — Count how many vowels appear in a given string.

// String Reverser — Reverse a string without using a built-in reverse method.

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

console.log(reversed);

// Even or Odd — Check whether a given number is even or odd.

let num = 7;
if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}

// FizzBuzz — Print 1–50; ”Fizz” for multiples of 3, ”Buzz” for multiples of 5, ”FizzBuzz” for both. A classic warm-up interview problem.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } if (i % 3 === 0) {
        console.log("Fizz");
    } if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}  
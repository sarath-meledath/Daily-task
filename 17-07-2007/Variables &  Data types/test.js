//Q.1 Personal Info Line — Store your name, age, and city in variables, then print them together in a single sentence.

let name = "John Doe";
let age = 30;
let city = "New York";

console.log("My name is " + name + ", I am " + age + " years old and I live in " + city + ".");


//Q.2 Swap Without a Third Variable — Given two variables, swap their values using only arithmetic (no extra variable allowed).

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("After swapping: a = " + a + ", b = " + b);

//Q.3 Favourite Movies — Store 05 of your favourite movies in separate variables and print them all. 

let movie1 = "Inception";
let movie2 = "The Matrix";
let movie3 = "Interstellar";
let movie4 = "The Dark Knight";
let movie5 = "Pulp Fiction";

console.log("My favaourite movies are: :" + movie1 + "," + movie2 + "," + movie3 + "," + movie4 + "," + movie5 + ".");

// Celsius to Fahrenheit — Convert a Celsius temperature to Fahrenheit using F = C × 9/5 + 32.

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + "°C is equal to " + fahrenheit + "°F.");

// null vs undefined — Create one null variable and one undefined variable, then print typeof for both to see the difference

let C = null;
let d = undefined;

console.log("Type of C (null): " + typeof C); // object
console.log("Type of d (undefined): " + typeof d); // undefined
    


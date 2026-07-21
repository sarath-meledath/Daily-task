// 1.var, let & const

// expected output:-

// 10
// 40
// ReferenceError: b is not defined
// Not executed (program stops at the previous error)

// 2. arrow function

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10));

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 10));

const greet = name => {
    return "Hello " +name + "!";
}

console.log(greet("Sarath"))

// 3. Template literals

let name = "Sarath";
let age = 19;

console.log(`My name is ${name} and I am ${age} years old.`);

// 4. Destructuring

let student = {
    Name: "Sarath",
    Age: 19,
    Course: "BCA"
};

let { Name, Age, Course } = student;

console.log(`Student: ${Name}`);
console.log(`Age: ${Age}`);
console.log(`Course: ${Course}`);

// 5. Spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

const copiedArray = [...mergedArray];

console.log(copiedArray);

// 6. Destructuring 

const Student = {
    NAME: "Sarath",
    AGE: 19,
    COURSE: "BCA"
};

const marks = [85, 90, 95];

// 1. Exteact name and course
const { NAME, COURSE } = Student;

// 2. Extract all three marks
const [marks1, marks2, marks3] = marks;

// 3. Print the extracted values
console.log(`Name: ${NAME}`);
console.log(`Course: ${COURSE}`);
console.log(`Marks: ${marks1}, ${marks2}, ${marks3}`);

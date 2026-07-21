// Convert Promise to Async/Await

function fetchStudent() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Rahul");
        }, 2000);
    });
}

async function getStudent() {
    let data = await fetchStudent();
    console.log(data);
}

getStudent();

// Create an async function called getStudent().
// The function should:
// ● Return a Promise.
// ● Wait for 2 seconds.
// ● Return the following object

async function getStudent() {
    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve({
                id: 1,
                name: "Rahul",
                course: "BCA"
            });
        }, 2000);
    });
}

async function displayStudent() {
    let student = await getStudent();

    console.log(student);

}

displayStudent();
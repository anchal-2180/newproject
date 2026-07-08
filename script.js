//Ques1
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Allowed");
        } else {
            reject("Too Young");
        }
    });
}

checkAge(10)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//Ques2
// Async function
async function checkAge(age) {
    if (age >= 18) {
        return "Allowed";
    } else {
        throw "Too Young";
    }
}

// Call the function using try...catch
async function test() {
    try {
        const result = await checkAge(20);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

test();
//Ques3
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3");
            resolve();
        }, 1000);
    });
}

// Chain the promises
step1()
    .then(() => step2())
    .then(() => step3())
    .catch((error) => console.log(error));
//Ques 4
async function getUserNames() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUserNames();
//Ques5
async function fetchInvalidURL() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Caught Error:", error.message);
    }
}

fetchInvalidURL();

//Ques6
async function fetchUsers() {
    try {
        const urls = [
            "https://jsonplaceholder.typicode.com/users/1",
            "https://jsonplaceholder.typicode.com/users/2",
            "https://jsonplaceholder.typicode.com/users/3"
        ];

        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        const users = await Promise.all(
            responses.map(res => res.json())
        );

        console.log(users);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchUsers();
//Ques7
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");



async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response)
     const data = await response.json(); // parsing the body is ALSO async
    console.log(data);
}

getTodo();
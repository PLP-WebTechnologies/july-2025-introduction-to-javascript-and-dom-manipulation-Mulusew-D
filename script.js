// Part 1: Variables and Conditionals
// ================================
const ageInput = document.getElementById("user-age");
const checkAgeBtn = document.getElementById("check-age");
const ageResult = document.getElementById("age-result");

checkAgeBtn.addEventListener("click", function() {
    const age = Number(ageInput.value); // convert input to number
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// Part 2: Functions
// ================================
function sum(a, b) {
    return a + b;
}

function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const sumBtn = document.getElementById("sum-btn");
const sumResult = document.getElementById("sum-result");

sumBtn.addEventListener("click", function() {
    sumResult.textContent = `5 + 10 = ${sum(5, 10)}`;
});

// Part 3: Loops
// ================================
const loopBtn = document.getElementById("loop-btn");
const loopResult = document.getElementById("loop-result");

loopBtn.addEventListener("click", function() {
    let numbers = "";
    for (let i = 1; i <= 5; i++) { // for loop
        numbers += i + " ";
    }
    loopResult.textContent = numbers.trim();
});

// Another loop example using while
let count = 1;
while (count <= 3) {
    console.log("Counting: " + count);
    count++;
}

// Part 4: DOM Manipulation
// ================================
const mainTitle = document.getElementById("main-title");
const toggleBtn = document.getElementById("toggle-btn");
const addItemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");

// Toggle title color
toggleBtn.addEventListener("click", function() {
    mainTitle.classList.toggle("highlight");
});

// Add item to list dynamically
let itemCount = 1;
addItemBtn.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    itemList.appendChild(li);
    itemCount++;
});

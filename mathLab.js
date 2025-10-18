
let num = 42;
let str = "Hello, World!";
let arr = [1, 2, 3, 4, 5];

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function getArrayLength(array) {
    return array.length;
}
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(add(5, 10)); // 15
console.log(multiply(5, 10)); // 50
console.log(getArrayLength(arr)); // 5
console.log(greet("Alice")); // Hello, Alice!
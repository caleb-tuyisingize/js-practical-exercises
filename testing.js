let user = 'Caleb';
console.log(user); // ❌ ReferenceError: Cannot access 'user' before initialization
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}
const getNames = generatorFunction();
console.log(getNames.next());
console.log(getNames.next());
console.log(getNames.next());
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countToThree();

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

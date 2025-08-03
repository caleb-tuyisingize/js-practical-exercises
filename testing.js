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

const oldArray = [1,1,2,3,7,5,3,4,5,3,2,9,9,0,3];

const newArray = new Set(oldArray);
const building = oldArray.map(e => e*e);
console.log(newArray);
console.log(oldArray);
console.log(building);
const months = ["january","februaly","march","apirl","may","june"];
const iterator = months.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
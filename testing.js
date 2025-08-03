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

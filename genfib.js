function genfib() {
  let a = 0, b=1;
  return function fib() {
    let result = a;
    [a,b] = [b, a+b];
    return result;
  };
}
const fib = genfib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
*/

// function persistence(num) {
//     let count = 0;
//     while (num >= 10) {
//         num = num.toString().split('').reduce((acc, curr) => acc * curr, 1);
//         count++;
//     }
//     return count;
// }
// // Examples:
// console.log(persistence(39));

function persistence(num) {
   let count = 0;
  while(num >= 10){
    num = num.toString().split('').reduce((acc, red)=> acc *  Number(red) ,1);
    count++;
  }
  return count;
}
console.log(persistence(39)); // 3
console.log(persistence(999));
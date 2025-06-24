// function nextBigger(n) {
//   const newNumbers = n.toString().split('');
//   let i = newNumbers.length - 2;
//   while (i >= 0 && newNumbers[i] >= newNumbers[i + 1]) {
//     i--;
//   }

//   if (i < 0) return -1; 

//   // Step 2: Find the smallest digit greater than newNumbers[i] to the right of i
//   let j = newNumbers.length - 1;
//   while (newNumbers[j] <= newNumbers[i]) {
//     j--;
//   }

//   [newNumbers[i], newNumbers[j]] = [newNumbers[j], newNumbers[i]];

//   const result = newNumbers
//     .slice(0, i + 1)
//     .concat(newNumbers.slice(i + 1).reverse())
//     .join('');

//   return parseInt(result, 10);
// }
// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(9)); // -1
// console.log(nextBigger(111)); // -1

// const string = "Amazi mEza cyane";
// console.log(string.replace(/[A-Z]/g, "Yummmo"));
// console.log(string.split(/[""]/));
// console.log(string.split(/[A-Z]/));

// function validateEmail(email) {
//   const regex = /^[\a-zA-Z.-]+@[a-z\d.-]+\.[a-zA-Z]{2   ,}$/;
//   return regex.test(email);
// }
// console.log(validateEmail("calebEmail@gmeil.rw"));

// About Constructors
/*
function Helper(kind,type,location){
 this.kind = kind;
 this.type = type;
 this.location = location;
 this.seekHelp = function(){
    console.log(`I need help of ${this.type} with ${this.kind} at ${this.location} because it's`);
 };
}
const help1 = new Helper("car","mechanic","kigali");
const help2 = new Helper("Phone","System","Tumba");

help1.seekHelp();

help2.seekHelp();
*/

// So new way by using contents literal
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;

// Old way of multi-lines string
/*const poem = "Roses are red\,"+
"Violets are blue\,"+
"JavaScript is awesome\,"+
"And so are you!";
 */

console.log(poem);


let numbers = 122344456777890000;

const newNumbers = numbers.toString().match(/(\d)\1*|0+/g);

const filtered = newNumbers.map((a) => a.length%2!==0 ? a :'')
.filter((a,b) => newNumbers.indexOf(a) === b)
.map(nums => nums.split("").filter((a,b) => nums.indexOf(a) === b).join(""))
.join("");
console.log(filtered);

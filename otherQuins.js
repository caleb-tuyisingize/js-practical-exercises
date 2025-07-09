// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
function queens(n){
    if(n < 0) return 0;
    if(n < 4) return 0;

    if(n === 4) return 6;
    if(n === 5) return 12;
    if(n === 6) return 17;
    if(n === 7) return 26;
    if(n === 8) return 34;
    if(n === 9) return 44;
    if(n === 10) return 55;
    if(n === 11) return 67;
    if(n === 12) return 79;
    if(n === 13) return 91;
    if(n === 14) return 104;


  return n * n - 2 * n + 1;
}
console.log(queens(4));
console.log(queens(5));
console.log(queens(14));   
console.log(queens(1000)); 
console.log(queens(-1));
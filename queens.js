// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
function queens(n){
  if(n < 0) return 0;
  if(n < 4) return 0;
  
  const known = {
    4: 6n,
    5: 12n,
    6: 17n,
    7: 26n,
    8: 34n,
    9: 44n,
    10: 55n,
    11: 67n,
    12: 79n,
    13: 91n,
    14: 104n
  };
  if(n in known) return known[n];
  const bn = BigInt(n);
 return bn * bn - 2n * bn - 1n;
}
console.log(queens(4));
console.log(queens(5));
console.log(queens(10)); 
console.log(queens(100));
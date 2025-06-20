// function add(a, b) {
//    const bigNumbers=(parseInt(a) + parseInt(b)).toString(); // Fix me!
//   return BigInt(bigNumbers);
// }
// console.log(add("123", "321"));

// function add(a, b) {
//         const bigNumbers=(parseInt(a) + parseInt(b)).toString(); // Fix me!
//         return bigNumbers;
// }

function add(a, b) {
  let i=a.length - 1;
  let j=b.length - 1;
  let carry = 0;
  let result = "";

  while(i >= 0 || j >=0 || carry){
    const numberI = i >= 0 ? parseInt(a[i]):0;
    const  numberJ= j >= 0 ? parseInt(b[j]):0;
    
    let sum = numberI + numberJ + carry;
    result = sum % 10 + result;
    carry = Math.floor(sum / 10);
    i--;
    j--; 
  }


  return result;
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963");
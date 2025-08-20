function sameCase(a, b){
  if(!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;
  const isAUpper = a === a.toUpperCase();
  const isBUpper = b === b.toUpperCase();
    if(isAUpper === isBUpper){
      return 1;
    }else{
      return 0;
    }

}

console.log(sameCase('a', 'g')); // 1
console.log(sameCase('A', 'C')); // 1
console.log(sameCase('b', 'G')); // 0
console.log(sameCase('B', 'g')); // 0
console.log(sameCase('0', '?')); 
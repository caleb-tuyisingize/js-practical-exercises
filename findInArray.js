function findInArray(sequence, func) {
  for (let i = 0; i < sequence.length; i++) {
    if (func(sequence[i], i)) {
      return i; 
    }
  }
  return -1; 
  }

console.log(findInArray([1, 2, 3, 4], (x) => x === 3)); 

console.log(findInArray(['a', 'b', 'c'], (v, i) => v === 'd')); 

console.log(findInArray([10, 20, 30, 40], (v, i) => i > 2)); 

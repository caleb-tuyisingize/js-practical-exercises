function nextBigger(n) {
  const newNumbers = n.toString().split('');
  let i = newNumbers.length - 2;
  while (i >= 0 && newNumbers[i] >= newNumbers[i + 1]) {
    i--;
  }

  if (i < 0) return -1; 

  // Step 2: Find the smallest digit greater than newNumbers[i] to the right of i
  let j = newNumbers.length - 1;
  while (newNumbers[j] <= newNumbers[i]) {
    j--;
  }

  [newNumbers[i], newNumbers[j]] = [newNumbers[j], newNumbers[i]];

  const result = newNumbers
    .slice(0, i + 1)
    .concat(newNumbers.slice(i + 1).reverse())
    .join('');

  return parseInt(result, 10);
}
console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
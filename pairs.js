function generatePairs(n) {
  const arr = [];
  for(let i = 0; i <= n; i++){
    for(let b =0; b <= i; b++){
      arr.push([b,i])
    }
  }
  return arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}
console.log(generatePairs(4))
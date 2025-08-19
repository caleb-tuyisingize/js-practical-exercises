function differenceOfSquares(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for(let i = 1; i <= n; i++){
    sum += i;
    sumOfSquares += i*i;
  }
  let squareOfsums = sum * sum;

  return squareOfsums - sumOfSquares;
}
console.log(differenceOfSquares(10))
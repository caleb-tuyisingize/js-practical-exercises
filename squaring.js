function squareDigits(num){
  const numbered = num.toString().split("");

  return Number(numbered.map(e=> e*e).join(""));
}
console.log(squareDigits(344));
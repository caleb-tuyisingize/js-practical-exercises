function multiTable(number) {
  let prod = "";
  for(let num = 1; num <=10; num++){
    prod += `${num} * ${number} = ${num*number}\n`;
  }
  return prod;
}

console.log(multiTable(5))
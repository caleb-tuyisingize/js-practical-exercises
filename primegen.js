var primeGen = (function*(){
let i = 2;
  while(true){
   if(isPrime(i)){
     yield i;
   }
   i++;
  }
}());

const isPrime = (n)=>{
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  const lim = Math.sqrt(n);
  for(let i = 3; i <= lim; i+=2 ){
    if(n % i ===0) return false;
  }
  return true;
}
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
console.log(primeGen.next().value)
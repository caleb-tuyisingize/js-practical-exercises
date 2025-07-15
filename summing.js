function sumMul(n,m){
  if(n <=0 || m <=0) return "INVALID";
let sum = 0;
  for(let number = n; number < m; number +=n){
    if(number !== m && number < m){
      sum +=number;      
    }
  }
  return sum;
}
console.log(sumMul(1,15));
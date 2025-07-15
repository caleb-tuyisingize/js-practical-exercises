function solution(number){
    if(number < 0) return 0;
    let sum = 0;
  for(let num=0; num < number; num++){
    if(num % 3 === 0|| num % 5 === 0){
        sum += num;
    }
  }
  return sum;
}
console.log(solution(10));
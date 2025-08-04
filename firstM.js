function multiples(m, n){
    const arr = [];
 for(let num = 1; num <= m; num++){
    arr.push(n*num);
 }
 return arr;
}
console.log(multiples(3,5));
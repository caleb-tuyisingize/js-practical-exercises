function divisibleCount(x, y, k) {
const max = Math.floor(y/k);// 5.5
const min = Math.floor((x-1)/k);//2.5
const range = max - min;
return range;

}
console.log(divisibleCount(6, 11, 3));

/*

function divisibleCount(x, y, k) {
   let count = 0;
  const arr = [];
  const selected = [];
   for(let i = x; i <= y; i++){
     arr.push(i);
     if(i % k === 0){
         selected.push(i);
     }
   }
   return selected.length;
}
console.log(divisibleCount(6, 11, 1))
*/

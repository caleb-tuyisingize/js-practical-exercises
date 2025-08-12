function findMissingNumbers(arr){
    const newArr = [];
    const solted = arr.sort((a,b)=> a-b);
    const missings = [];
 for(let num = solted[0]; num <= solted.length; num++){
  newArr.push(num);
 }
   const getter = newArr.map(a=> solted.includes(a) ? null: missings.push(a));
return missings;
}
console.log(findMissingNumbers([-3,-2,1,-6,5]));

/*
function findMissingNumbers(arr) {
  let missing = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    for (let num = current + 1; num < next; num++) {
      missing.push(num);
    }
  }

  return missing;
}
*/
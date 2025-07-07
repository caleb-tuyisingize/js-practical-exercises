snail = function(array) {
//   const snail = [...array];
    const result = [];
    while(array.length){
        result.push(...array.shift());
        for(let row of array){
            if(row.length) result.push(row.pop());
        }
        if(array.length){
            result.push(...array.pop().reverse());
        }
        for(let i = array.length-1; i >= 0; i--){
            if(array[i].length) result.push(array[i].shift());
        }
    }
  return result;
}
const array = [[1,2,3],
         [8,9,4],
         [7,6,5]];
console.log(snail(array));
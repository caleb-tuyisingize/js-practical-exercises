// function findUnique(numbers) {
//   const sorted = numbers.sort((a,b) => a - b);
//     return sorted.reduce((num1, num2,main) => num1 ^ num2);
// }

function findUnique(arr){
  //coding and coding..
  const solted = arr.sort((a,b) => a - b); 
 return solted.reduce((a,b) =>{
     return solted.indexOf(a) ^ solted.indexOf(b);
} );
}

// function findUnique(numbers) {
//   const sorted = numbers.sort((a,b) => a - b);
//     return numbers.filter((a,b) => a > );
// }

// function findUnique(numbers) {
//   const sorted = numbers.sort((a,b) => a - b);
//     for(let i = 0; i < sorted.length; i++ ){
//         if(i !== i + 1){
//             return sorted[i]
//         }
//     }
// }



console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))
console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]))

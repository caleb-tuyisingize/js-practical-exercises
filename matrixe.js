/*
function swapDiagonals(matrix) {
    const handle = matrix.length;
    for(let i = 0; i < handle; i++){
         matrix[i].reverse();
    }
     if(handle % 2 !== 0){
        const mid = Math.floor(handle / 2);
     }
    return matrix;
}

*/

function swapDiagonals(matrix) {
    const handle = matrix.length;
    for(let i = 0; i < handle; i++){
         [matrix[i][i], matrix[i][handle - 1- i]] = [matrix[i][handle - 1 - i], matrix[i][i]];
    }

    return matrix;
}
const matr = [
[1,2,3],
[4,5,6],
[7,8,9]
];
console.log(swapDiagonals(matr));

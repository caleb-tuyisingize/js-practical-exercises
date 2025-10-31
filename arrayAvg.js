const arr = [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]];

const avg = (arr)=>{
    const result = [];
    const numCols = arr[0].length;
  for (let i = 0; i < numCols; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
    }
    const avrg = sum / arr.length;
    result.push(avrg);

    }
    return result;
}

console.log(avg(arr));

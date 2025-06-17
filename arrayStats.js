const array = [1, 2, 3, 4, 5];
const arrayStats = ()=>{
    // const sum = array.reduce((acc, num) => acc + num, 0);
    const sum = array.reduce((acc,num) => acc+num, 0);
    const average = sum / array.length;
    const max = Math.max(...array);
    const min = Math.min(...array);

    return {
        sum: sum,
        average: average,
        max: max,
        min: min
    };
}
console.log(arrayStats());
//     return `
//         sum: ${sum},
//         average: ${average},
//         max: ${max},
//         min: ${min}`; 
// }
// console.log(arrayStats());

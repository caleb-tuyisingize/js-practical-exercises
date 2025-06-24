
// const array = [1,2,2,2,3,4,5,5,5,6,5,5,1,1,22];

// // Without set function
// // const uniques = array.filter((a,b)=> array.indexOf(a) === b);

// // With [...new set()]
// const uniques = [... new Set(array)];


// console.log(uniques);

const string = "gihugu";
console.log(string[0].toUpperCase() + string.slice(1))
console.log(string[0].toUpperCase() + string.substring(1))
console.log(string.charAt(0).toUpperCase() + string.slice(1))
console.log(string.charAt(0).toUpperCase() + string.substring(1))
function findDeletedNumber(arr, mixedArr) {
const first = arr.reduce((a,b) => a+b, 0);
const second = mixedArr.reduce((a,b) => a+b,0);
return first - second;
}
console.log(findDeletedNumber([1,2,3,4,5], [2,4,1,5]));
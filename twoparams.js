function all( arr, fun ){
 return arr.every(fun);
}
function greater_than_9(n){
return n>9;
}
function less_than_9(n){
    return n<9;
}

console.log(all([1, 2, 3, 4, 5], greater_than_9));
console.log(all([1, 2, 3, 4, 5], less_than_9));
console.log(all([], greater_than_9)); 
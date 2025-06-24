
/*Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its arr. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the arr can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1*/

// function nextBigger(n){
//   var number = n.toString();
//   var arr = number.split("");
//   var arr1 = arr.sort(function(a, b) {
//    if(b - a) {
//      return -1;
//    }else{
//      return b - a;
//    }
//   });
//   return arr1;
// }
//   console.log(nextBigger(351));

function nextBigger(n) {
    var number = n.toString();
    var arr = number.split("");
    var len = arr.length;
    var i = len - 2;
    while (i >= 0 && arr[i + 1]){
        i--;
    }

    if (i < 0) return -1;


    var j = len - 1;
    while (arr[j] <= arr[i]){
        j--;
    }
 [arr[i],arr[j]] = [arr[j], arr[i]];
 
  const result = arr
    .slice(0, i + 1)
    .concat(arr.slice(i + 1).reverse())
    .join('');

  return parseInt(result, 10);
}
console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
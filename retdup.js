/*function duplicates(arr) {
    // const nums = arr.map(a=>  a.typeof === "string");
  arr=arr.filter((a,b)=> arr.indexOf(a) === b ? b:[])
return arr.map(Number).filter((a,b) => arr.indexOf(a) === b)
}

console.log(duplicates([1, 2, 3, 4, 5]))
*/

function duplicates(arr) {
  const seen = [];
  const dups = [];

  arr.forEach((item) => {
    if (seen.includes(item)) {
      if (!dups.includes(item)) {
        dups.push(item);
      }
    } else {
      seen.push(item);
    }
  });

  return dups;
}
console.log(duplicates([1, 2, 3, 4,4, 5]))
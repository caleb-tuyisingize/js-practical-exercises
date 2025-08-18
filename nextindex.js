/*
function leastLarger(a,i) {
const arr  = a.reduce((l, k) => l >= a[i] ? l : -1)
  return arr;
}
*/

function leastLarger(a, i) {
  let target = a[i];
  let idx = -1;

  a.reduce((smallest, val, currentIndex) => {
    if (val > target && (smallest === null || val < smallest)) {
      smallest = val;
      idx = currentIndex;
    }
    return smallest;
  }, null);

  return idx;
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ));
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ));
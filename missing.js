/*
function solution(array) {
  var missing = 0, duplicate = 0;
  const missed = [];
  const as = [];
  const missingo = [];
  const monkey = array.filter((a,b)=> array.indexOf(a) === b? a:missed.push(a));
  for(let i=1; i <= array.length; i++){
    missingo.push(i);
  }
const checking = missingo.map(a=> array.includes(a) ? "" : as.push(a));
return [duplicate+as[0], missing+missed[0]];

}
*/

function solution(array) {
  let missing = 0, duplicate = 0;
  const missed = []; // store duplicates
  const as = [];     // store missing numbers
  const missingo = [];

  // Find duplicates efficiently
  const seen = new Set();
  for (let num of array) {
    if (seen.has(num)) {
      missed.push(num); // duplicate found
    } else {
      seen.add(num);
    }
  }

  // Create expected numbers from 1..n
  for (let i = 1; i <= array.length; i++) {
    missingo.push(i);
  }

  // Find missing numbers efficiently
  for (let num of missingo) {
    if (!seen.has(num)) {
      as.push(num);
    }
  }

  duplicate = as[0];
  missing = missed[0];

  return [duplicate, missing];
}


console.log(solution([2,4,1,6,3,4]));
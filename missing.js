
function solution(array) {
  var missing = 0, duplicate = 0;
  const duplicated = []; //DUPLICATES
  const missed = []; // MISSING
  const missingo = []; // ALL NUMBERS EXPECTED 1- FINAL
  const monkey = array.filter((a,b)=> array.indexOf(a) === b? a:duplicated.push(a)); //DUP
  for(let i=1; i <= array.length; i++){
    missingo.push(i);
  }
const checking = missingo.map(a=> array.includes(a) ? "" : missed.push(a)); //FOR GETTING THE NUMBER MISSING
return [duplicate+missed[0], missing+duplicated[0]];

}


function solution(array) {
  let missing = 0, duplicate = 0;
  const duplicated = []; // store duplicates
  const missed = [];     // store missing numbers
  const missingo = [];

  // Find duplicates efficiently
  const seen = new Set();
  for (let num of array) {
    if (seen.has(num)) {
      duplicated.push(num); // duplicate found
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
      missed.push(num);
    }
  }

  duplicate = missed[0];
  missing = duplicated[0];

  return [duplicate, missing];
}


console.log(solution([2,4,1,6,3,4]));
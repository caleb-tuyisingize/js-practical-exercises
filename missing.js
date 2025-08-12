
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

console.log(solution([2,4,1,6,3,4]));
//Should return: [4,0]: expected [ '+0', 4 ] to deeply equal [ 4, +0 ]
function scoreboard(string) {
  const scores={
    "nil" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
    
  };
  let newScores = [];
  const words = string.split(/\W+/);
  for(let i in scores){
      words.forEach(word => {
          if(word.toLowerCase() === i){
              newScores.push(scores[i]);
          }
      });
  }
  return newScores;
}
console.log(scoreboard("The score is 4 0"));
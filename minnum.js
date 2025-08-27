function findShort(s){

  return Math.min(...s.split(" ").map(word => word.length));
}
console.log(findShort("Simple given a string of words"));
console.log(findShort("I love JavaScript"));
console.log(findShort("Coding is amazing"));
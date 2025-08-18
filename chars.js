function position(letter){
 const letters = letter.toLowerCase();
  return `Position of alphabet: ${letters.charCodeAt(0) - 96}`;
}
console.log(position("a"));
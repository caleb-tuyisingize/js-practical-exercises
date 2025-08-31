// returns index of move
function solveTTT(board) {
    const arr = new Set();
  if(board.length <= 9){
      return board.length;
}else{
    return "Invalid";
}
}
console.log(solveTTT(['', '', '', 'O', '', '', 'X', '']));
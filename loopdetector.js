/*
function hasLoop(indices) {
  const someone = indices.map((e,index)=> indices.indexOf(e)===index ?true:false);
  return someone.includes(false)?"true":false;
}
console.log(hasLoop([1,2,3,4]));
*/

function hasLoop(indices) {
    const newArr = new Set();
    let indexHandler = 0;
    while(indexHandler < indices.length){
        if(newArr.has(indexHandler)) return true;
        newArr.add(indexHandler);
        indexHandler = indices[indexHandler];
    }
  return false;
}
console.log(hasLoop([1,2,3,4,2]));


/*
function nameInStr(str, name){
  const stri = str.toLowerCase().split("")
 const filtered = stri.filter((a) => a >= 'a' && a <= 'z')
                      .map(char => char.charCodeAt(0) - 96);

 const byName = name.toLowerCase().split("")
                                  .filter((a) => a >= 'a' && a <= 'z')
                                  .map(char => char.charCodeAt(0) -96);
const comb = filtered.sort((fir,las)=> fir - las)
let somes = 0;
const allIncluded = filtered.some((some) => {
    if(some === byName[somes]) somes++;
    if (somes === byName.length) return true;
});
return allIncluded;
}

*/

function nameInStr(str, name){
str = str.toLowerCase();
name = name.toLowerCase();

let index = 0;

for(let money of name){
    index = str.indexOf(money,index);

    if(index === -1){
        return false;
    }
    index ++;
}
return true;
}

console.log(nameInStr("Abana babo mevic Calculator","Caleb"));
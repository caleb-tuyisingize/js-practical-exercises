
/*

function rotate(array,n){
    if (n === 0) return array;
    if(n === array.length) return array;
    
        const reversedArray = array.slice(-n);
        const backArray = array.slice(0, -n);
        const mainArray = [];
        mainArray.push(reversedArray.join(''));
        mainArray.push(backArray.join(""));
        const arr = mainArray.join('').split('');
        return arr.map(Number);
    
}
const data = [1, 2, 3, 4, 5];
console.log(rotate(data, 4));
*/


function rotate(array,n){
    if (n === 0) return array;
    if(n === array.length) return array;
    n = n%array.length;
        const reversedArray = array.slice(-n);
        const backArray = array.slice(0, -n);
       return reversedArray.concat(backArray);
    
}
const data = ["a", 2, 3, 4, 5];
console.log(rotate(data, 5));
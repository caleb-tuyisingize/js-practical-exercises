function squareProduct(n) {
    const newArr = [];
    const max = Math.floor(Math.sqrt(n));
    for(let i = 1; i <= max; i++){
        if(n % (i*i) === 0){
            const squared = n / (i*i);
            const handle = Math.sqrt(squared);
            if(Number.isInteger(handle)){
                const newHandle = [i, handle].sort((x,y) => x - y).toString();
                newArr.push(newHandle);
            }

        }

    }
    return newArr.map(str => str.split(",").map(Number));
}

console.log(squareProduct(256)); 
console.log(squareProduct(2));  
console.log(squareProduct(1));   
console.log(squareProduct(81)); 
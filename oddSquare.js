const array = [10,15,20,25,30,35,40,45,50];
const oddSquares = () =>{
    const squared = array.filter(a => a%2 !==0).map(a => a*a);
    return squared;
}
console.log(oddSquares());


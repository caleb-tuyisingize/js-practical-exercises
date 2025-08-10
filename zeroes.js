function zeros (n) {
let factor = 0; 
while(n >= 5){
    n=Math.floor(n / 5);
    factor += n;
 }
 return factor;
}

console.log(zeros(30));
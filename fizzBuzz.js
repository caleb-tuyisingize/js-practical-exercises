 
var x = 1;

while (x <=20) {
    // check divisibility
    if(x % 3 === 0 &&  x % 5 === 0){
        console.log("JuliaJames");
    }else if(x % 3 === 0){
    console.log("Julia\n");//, James, or JuliaJames
        
    }else if(x % 5 ===0){
        console.log("James");
    }else {
        console.log(x+"\n");
    }
    x = x+1;
    // increment x
}
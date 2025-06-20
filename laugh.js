let word ="";
function  laugh(num){
    for(var i=1; i<=num; i++){
        word = word +"ha";
    }
    word = word+ "!";
    return word;
}
console.log(laugh(3));
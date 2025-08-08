
function zero(number) {
    return number ? number(0):0;
}
function one(number) {
    return number ? number(1):1;
}
function two(number) {
    return number ? number(2):2;
}
function three(number) {
    return number ? number(3):3;
}
function four(number) {
    return number ? number(4):4;
}
function five(number) {
    return number ? number(5):5;
}
function six(number) {
    return number ? number(6):6;
}
function seven(number) {
    return number ? number(7):7;
}
function eight(number) {
    return number ? number(8):8;
}
function nine(number) {
    return number ? number(9):9;
}


function plus(op) {
    return function(op2){

        return op2+op;
    }
}
function minus(op) {
    return function(op2){

        return op2-op;
    }}
function times(op) {
    return function(op2){

        return op2*op;
    }}
function dividedBy(op) {
    return function(op2){
     
        const rounder = Math.floor(op2/op);
        return rounder;
    }}

console.log(three(plus(nine())));  
console.log(seven(times(five())));
console.log(eight(minus(three())));
console.log(three(dividedBy(two())));
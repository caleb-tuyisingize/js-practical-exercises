function disemvowel(str) {

   const sel=  str.split("").map((str)=>{
        if(str === str.toLowerCase()){
    const i = str.split("i").join("");
    const e = i.split("e").join("");
    const u = e.split("u").join("");
    const o = u.split("o").join("");
    const a = o.split("a").join("");
    return a;
        }else{

    const I = str.split("I").join("");
    const E = I.split("E").join("");
    const U = E.split("U").join("");
    const O = U.split("O").join("");
    const A = O.split("A").join("");
    return A;
        }
})
return sel.join("");
}
console.log(disemvowel("This website is for losers LOL!"));
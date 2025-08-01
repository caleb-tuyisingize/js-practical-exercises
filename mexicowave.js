function wave(str){
    const checker = str.split(" ");
    const newString = [];
    if(checker.length > 1){
        const mappers= str.replace(/[\s]/g,"");
          let lengthOfWord = mappers.length;
        for(let i = 0; i < lengthOfWord; i++){
        let strings = mappers.split("").map((e, index)=> index === i ? e.toUpperCase() : e);
            newString.push(strings.join(""));
        }
     return newString;  
    }else{
    let lengthOfWord = str.length;
    for(let i = 0; i < lengthOfWord; i++){
        let strings = str.split("").map((e,index)=> index === i ? e.toUpperCase() : e);
            newString.push(strings.join(""));
        }
     return newString;   
    }
 
}
console.log(wave('two words'));
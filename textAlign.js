function justify(text, width) {
  const textMod = text.split("")
  const newTxt = [];
  for(let str = 0; str < textMod.length; str+2){
    if(textMod[str] === textMod[width*str]){
        newTxt.push(textMod[str] += '\n');
    }else{
        newTxt.push(textMod[str])
    }
  }
  return newTxt.join("");
  
}
const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus repellendus ratione, quam porro consectetur maiores non voluptas perferendis. Quasi possimus odit ad numquam magni a labore, eos qui repellendus.";
console.log(justify(str, 4));
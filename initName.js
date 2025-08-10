function initializeNames(name){
  let names = name.split(" ");
  if(names.length >2){
    return names.map((a) => names.indexOf(a) > 0 && names.indexOf(a) < names.length-1 ? `${a.charAt(0)}.`: a).join(" ");
  }
  
  
  return names.join(" ");
}
console.log(initializeNames('Caleb Mufasa'));
function likes(names) {
  if(names.length === 0){
      return "no one likes this";
  }else{
     
      if(names.length <=2) return getLikes = names.length < 2 ? `${names[0]} likes this`: `${names[0]} and ${names[1]} like this`;
      if(names.length === 3){
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }else{
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
        }
}
  
}
console.log(likes(["Docile"]));
const reverseMe = (name)=>{
    let names = "";
    for(var i = name.length-1; i>=0; i--){
      names += name[i];
    }
    return names;

}
console.log("Hello "+reverseMe("Karebu")+" My name is "+reverseMe("Merci")+" am a Student in the "+reverseMe("GYM"));
function getMichaelLastName(inputText) {
    var splitted = inputText.split(" ");
    const newStr = [];
    let names = splitted.map((a,index)=>{
              if(a==="Michael"){
                let str = splitted[index+1];
                  if(str.charAt(0) === str.charAt(0).toUpperCase()){
                      str = str.replace(/[.,?]/,"");
                    newStr.push(str);
                    }
              }
    })
    return newStr;
}
const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
console.log(getMichaelLastName(inputText));
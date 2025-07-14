let name = prompt("Enter the name");
const capt =  name.toLowerCase()
                  .split("")
                  .filter(a => a >= "a" && a<= "z")
                  .map(char => char.charCodeAt(0) -96);

console.log(capt)
function solve(eq){
   const reversed = eq.split(/(?<=[/+*-])|(?=[/+*-])/).reverse().join("");
   return reversed;
}
console.log(solve("100*b/y"));
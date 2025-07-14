// function stripe(text,markers){
//     const changed = text.replace(/[#|!].*$/gm, "").trim("");
//     return changed;
// }
// var result = stripe("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
// console.log(result);


function solution(text, markers){
    const escapeMarkers = markers.map(mark => mark.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(`\\s*[${escapeMarkers.join('')}].*$`, 'gm');
    return text 
    .replace(regex, '')
    .split('\n')
    .map(line => line.trimEnd())
    .join("\n");

}
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
console.log(result);
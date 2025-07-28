function solution(list){
const result = [];
let start = list[0];
for(let i = 1; i <= list.length; i++){
    if(list[i] !== list[i-1]+1){
         const end = list[i-1];
         if(end - start >= 2){
            result.push(`${start}-${end}`);
         }else if(end - start === 1){
            result.push(start, end);
         }else{
            result.push(start);
         }
         start = list[i];
    }
}
return result.join(",");
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

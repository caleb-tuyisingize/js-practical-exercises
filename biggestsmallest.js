function highAndLow(numbers){
    const arr = [];
  const nums = numbers.split(" ").map(Number).sort((a,b) => a-b);
  arr.push(nums[0]);
  arr.push(nums[nums.length-1]);
  return arr.map(a=> a.toString()).join(" ");
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
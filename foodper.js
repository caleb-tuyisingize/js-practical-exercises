function minimumPercentage(foods) {
  const eatenFood = foods.reduce((sum, percent) => sum + (100 - percent), 0);
  //  <----  hajime!

  return Math.max(0,100 - eatenFood);
}

console.log(minimumPercentage([65, 80, 80, 90]));
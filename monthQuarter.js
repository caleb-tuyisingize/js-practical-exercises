/*
const quarterOf = (month) => {
  if(month <= 3){
    return 1;
  }else if(month > 3 && month <= 6){
    return 2;
  }else if(month > 6 && month <= 9){
    return 3;
  }else if(month > 9 && month <= 12){
    return 4;
  }
  
}
*/



const quarterOf = (month) => {
  if(month <= 3){
    return `Month ${month} = quarter 1`;
  }else if(month > 3 && month <= 6){
    return `Month ${month} = quarter 2`;
  }else if(month > 6 && month <= 9){
    return `Month ${month} = quarter 3`;
  }else if(month > 9 && month <= 12){
    return `Month ${month} = quarter 4`;
  }
  
}

console.log(quarterOf(11));
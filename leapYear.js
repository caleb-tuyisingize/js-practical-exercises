function isLeapYear(year) {
    
    if(!(year >=1600 && year <= 4000)) return "invalid year";
    if(year % 4 === 0 && year % 100 !== 0){
        return "Leap Year";
    }else if(year % 400 === 0){
        return "Leap Year";
    }else{
    return "Not a leap year";
  }
}


console.log(isLeapYear(6000));
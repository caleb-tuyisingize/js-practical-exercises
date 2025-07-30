function ipsBetween(start, end){
    //--WAY ONE USED
//   const ipConverter = (ip)=> ip.split(".").map(x=> parseInt(x)).reduce((num , conv) => num * 256+conv);
    //-- WAY I USED
//   const ipConverter = (ip)=> ip.split(".").reduce((num , conv) => num * 256 + +conv,0);
    //WAY THREE BY LOOP

    let ip1 = start.split(".");
    let ip2 = end.split(".");
    let result = 0;
    for(let i = 0; i < 4; i++){
        result += (ip2[i] - ip1[i]) * 256 **(3-i);
    }


//   return ipConverter(end) - ipConverter(start);
return result;
}
 console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
  console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
  console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
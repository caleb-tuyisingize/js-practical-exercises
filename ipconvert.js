function ipsBetween(start, end){
  const ipConverter = (ip)=> ip.split(".").reduce((num , conv) => num * 256 + +conv,0);
  return ipConverter(end) - ipConverter(start);
}
 console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
  console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
  console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
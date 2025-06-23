function convertFrac(lst){
    if(!lst.length) return "";
    // Helper function to calculate the GCD

    const gcd =(a,b) => b === 0 ? a : gcd(b, a % b);
    
    // Helper function to calculate the LCM
    const lcm = (a,b) => (a * b)/ gcd(a,b);

    // To get all denominators with map method
    // const denominators = lst.map(([_,frac]) => frac);

    // Get the last common multiple of all denominators with reduce method
    const commonDenominator = lst.map(([_,frac]) => frac)
                                 .reduce((acc,d) => lcm(acc, d));

    // Convert each fraction to have the common denominator with map

    const result = lst.map(([numer, denom])=>{
        const factor = commonDenominator / denom;
        const toRet = numer * factor;
        return `(${toRet},${commonDenominator})`;
    }).join("");
    return result;
}

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));
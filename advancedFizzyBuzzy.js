let fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    let sequence = [];
    for(let i = 1; i <= 100; i++){
        let output = "";

        if(i % numOne === 0) output += stringOne;
        if(i % numTwo === 0) output += stringTwo;
        sequence.push(output || i);
    }
    return sequence;
 
};


console.log(fizzBuzzCustom('Foo', 'Bar', 2, 3))
console.log(fizzBuzzCustom('Hey', 'There'))
console.log(fizzBuzzCustom()[15]);              // 16
console.log(fizzBuzzCustom()[44]);              // "FizzBuzz"
console.log(fizzBuzzCustom('Hey', 'There')[25]); // 26
console.log(fizzBuzzCustom('Hey', 'There')[11]); // "Hey"
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80]); // "What's up?"



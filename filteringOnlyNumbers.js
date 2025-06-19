// function
//  filter_list(l) {
//     return l.filter(a => typeof a === 'number');

// }
// console.log(filter_list([1,2,'aasf','1','123',123])); // Output: [1, 2, 123]

// console.log("The man whispered \"\n\tPlease speak to me\"");
// console.log("The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.");
// console.log("Green">"green");

// var joke = "Why couldn't the shoes go out and play? \nThey were all \"tied\" up!";
// console.log(joke);


// var haiku = "Blowing from the west\n"+"Fallen leaves gather\n"+"In the east."
// console.log(haiku);

// console.log(3 === 3);
// var thingOne = "red"; var thingTwo = "blue";

// console.log(thingOne +" "+ thingTwo);

// var bill=10.25 + 3.99 + 7.15;
// var tip = 0.15*bill;
// var total = bill+tip;
// console.log(total.toFixed(2) + "$");
//  var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// var madLib="The Intro to JavaScript course is "+adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!";
// console.log(madLib);

//  var firstName="Julia";
//  var interest="cats";
//  var hobby="play video games";
 
//  var awesomeMessage="Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+"."
//  console.log(awesomeMessage);

// var number = 4;

// if (0=== number % 2) {
//     console.log("even");
    
// } else if(0!== number % 2){
//     console.log("odd");
// }else{
//     console.log("NaN");
// }

// var musicians = 1;

// if(musicians <= 0){
//     console.log("not a group");
// }else if(musicians == 1){
//     console.log("solo");
// }else if(musicians == 2){
//     console.log("duet");
// }else if(musicians == 3){
//     console.log("trio");
// }else if(musicians == 4){
//     console.log("quartet");
// }else if(musicians > 4){
//     console.log("this is a large group");
// }


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// Change these to test different scenarios:
// let balance = 325.00;
// let isActive = true;
// let checkBalance = true;

// if (checkBalance) {
//   if (isActive && balance > 0) {
//     console.log("Your balance is $" + balance.toFixed(2) + ".");
//   } else if (!isActive) {
//     console.log("Your account is no longer active.");
//   } else if (isActive && balance === 0) {
//     console.log("Your account is empty.");
//   } else if (isActive && balance < 0) {
//     console.log("Your balance is negative. Please contact bank.");
//   }
// } else {
//   console.log("Thank you. Have a nice day!");
// }

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";


if(
    (flavor === "vanilla" || flavor === "chocolate")&&
    (vessel === "cone" || vessel === "bowl")&&
    (toppings === "sprinkles" || toppings === "peanuts")
){
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}


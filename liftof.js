/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

let count = 60;

while(count >= 0){
     if(count === 50){
        console.log(`Orbiter transfers from ground to internal power\n`);
    }else if(count === 31){
        console.log(`Ground launch sequencer is go for auto sequence start\n`);
        
     }else if(count === 16){
        console.log(`Activate launch pad sound suppression system\n`);
        
     }else if(count === 10){
        console.log(`Activate main engine hydrogen burnoff system\n`);
        
     }else if(count === 6){
        console.log(`Main engine start\n`);
        
     }else if(count === 0){
        console.log(`Solid rocket booster ignition and liftoff!\n`);
        
     }else{

         console.log(`T-${count} seconds\n`);
     }



    count --;
}
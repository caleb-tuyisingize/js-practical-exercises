const array=["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
array[6]="Amandazi";
array[7]="Icyayi";
array.push("Amata");
// array.pop("sprinkled");

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */
// var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1, "Yellow", "Green", "Blue", "Purple");
rainbow.splice(6,1);
console.log(rainbow);
// your code goes here


console.log(array);


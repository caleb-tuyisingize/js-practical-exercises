/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

const facebookProfile ={
    name:"Me",
    friends:1 ,
    messages:[""] ,
    postMessage: function send(message){
        const sending = facebookProfile.messages.push(message);
        return `Sent message is ${facebookProfile.messages}` ;
    },
    deleteMessage: function dmessage(index){
        const deleting = facebookProfile.messages.splice(index-1,1);
        return `Message on index ${index-1} is deleted Succesfully` ;
    },
    addFriend: function friend(){
        const addingFriend = facebookProfile.friends+1;
        return `You have ${addingFriend} friends now` ;
        
    },
    removeFriend: function unfriend(){
        const addingFriend = facebookProfile.friends-1;
        return `You have ${addingFriend} friends now` ;
    }
    
};
console.log(facebookProfile.postMessage("How are you my Friend Nyamanza??"));
// console.log(facebookProfile.removeFriend());
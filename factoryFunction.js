
// function test(name,age){
//     return {
//         name,
//         age,
//         greet: function(){
//             console.log(`hello ${name} of ${age}`);
//         }
//     };
// }

const holder = {
    
    greet: function(){
        console.log(`Hello ${this.name} of ${this.age}`);
    }
}

function letSee(name,age){
    const user = Object.create(holder);
    user.name=name;
    user.age=age;
    return user;
    
}
const u1 = letSee("Caleb",25).greet();

// ("Samuel",30)

class Mevis{
    constructor(name, age){
        this.name = name;
        this.age = age;
        if(this.age > 20){

            console.log(`Hello ${this.name} you are ${this.age} years old and you can't continue sorry for that 
                and this age can be whole
                `);
                }else{
                   console.log(`Hello ${this.name} you are ${this.age} years old and you can continue sorry for that 
                and this age can be whole
                `);   
                }
    }
    
}

const mevis = new Mevis("Caleb", 23);
const docite = new Mevis("Docite", 23);
const elyse = new Mevis("Docite", 19);

const user1 = Mevis.mevis;
const user2 = Mevis.docite;
const user3 = Mevis.elyse;
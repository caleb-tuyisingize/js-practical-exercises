class Mevis{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
    
}

const mevis = new Mevis("Caleb", 23);
const docite = new Mevis("Docite", 23);

const user1 = Mevis.mevis;
const user2 = Mevis.docite;
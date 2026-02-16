

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
      let singleNamed =  this.name.split(" ");
      let greet = `Hello, ${singleNamed[0]} ${singleNamed[singleNamed.length-1]}!`;
      return greet;
    }
};


let p1 = new Person("Tuyisingize Mevis Caleb");

console.log(p1.greet());




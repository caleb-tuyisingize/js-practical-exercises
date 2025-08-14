class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {

    super(name, age, 4, "cat", status);
  }
 introduce(){
    return super.introduce()+ "  Meow meow!";
 }
}
class Dog extends Animal {
  constructor(name, age, status, master){
     super(name, age, 4, "dog", status);
     this.master = master;
  }
  greetMaster(){
    return "Hello " +this.master;
  }
}

var example = new Shark("Example",20,"Happy");
console.log(example.introduce());

var example1 = new Cat("Example",20,"Happy");
console.log(example1.introduce());

var example2 = new Dog("Example",20,"Happy","Mustif");
console.log(example2.greetMaster());

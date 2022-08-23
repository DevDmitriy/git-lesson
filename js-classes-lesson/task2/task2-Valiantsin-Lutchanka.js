// Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  console.log(rabbit.name);
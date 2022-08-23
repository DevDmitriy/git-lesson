class Animal {
    constructor(name, created) {
      this.name = name;
      this.created = created;
    }
  }
  
  class Rabbit extends Animal {}
  
  let rabbit = new Rabbit("White Rabbit"); 
  alert(rabbit.name);
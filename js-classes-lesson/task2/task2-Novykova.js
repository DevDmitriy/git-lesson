// Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name, created) {
    super(name);
    this.created = created;
  }
}

let rabbit = new Rabbit("White Rabbit", Date.now());
alert(rabbit.name);
class Car {

constructor(brand, speed) {
    this.brand = brand,
    this.speed = speed
    }	

set accelerate(amount) {
    this.speed += amount;
}

set brake(amount) {
    this.speed -= amount;
}
status() {
    return this.brand + " running at " + this.speed + " km/h";
}
};

let ford = new Car('Ford', 0)
let ferrari = new Car('Ferrary', 0)


// Try methods

console.log(ford.status());
ford.accelerate = 50;
console.log(ford.status());
ford.accelerate = 100;
console.log(ford.status());
ford.brake = 25;
console.log(ford.status());



ferrari.accelerate = 200;
console.log(ferrari.status());
ferrari.brake = 100;
console.log(ferrari.status());
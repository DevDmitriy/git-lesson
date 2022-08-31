class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount) {
        return this.speed += amount;
    }

    brake(amount) {
        return this.speed -= amount;
    }

    describe() {
        return this.brand + " running at " + this.speed + " km/h";
    }
}


let car1 = new Car('Ford', 0);
let car2 = new Car('Ferrari', 0);


console.log(car1.describe());
car1.accelerate(50);
console.log(car1.describe());
car1.accelerate(100);
console.log(car1.describe());
car1.brake(25);
console.log(car1.describe());

car2.accelerate(200);
console.log(car2.describe());
car2.brake(100);
console.log(car2.describe());
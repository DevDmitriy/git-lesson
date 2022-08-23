// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and	
// 3 methods (accelerate, brake, describe)

class Car {

	constructor(brand) {
        this.brand = brand;
        this.speed = 0;
	}
	// methods:

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		this.speed -= amount;
	}

	status() {
		return this.brand + " running at " + this.speed + " km/h";
	}
};


// Try methods

var car = new Car('Ford');

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


// But now if we want another car we need to repeat the code...
// That's unnecessary repetition.

var car2 = new Car('Ferrari');

car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());
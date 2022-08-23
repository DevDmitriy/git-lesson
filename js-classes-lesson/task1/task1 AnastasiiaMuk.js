class Car {
	
	constructor(brand) {
		this.brand = brand;
	}

	brand;
	speed = 0;

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		this.speed -= amount;
	}

	status() {
		return this.brand + " running at " + this.speed + " km/h";
	}
}

var car = new Car("Ford");
var car2 = new Car("Ferrari")

// Try methods

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());

car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());

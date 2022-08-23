// Define a car1 object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)

class Car {
	constructor(brand,speed){
		this.brand = brand;
		this.speed = speed;
	}

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount){
		this.speed -= amount;
	}

	status(){
		return this.brand + " running at " + this.speed + " km/h";
	}


}

// Try methods

let car1 = new Car('Ford',0);

console.log(car1.status());
car1.accelerate(50);
console.log(car1.status());
car1.accelerate(100);
console.log(car1.status());
car1.brake(25);
console.log(car1.status());

let car2 = new Car('Ferrari',0);

	
car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());


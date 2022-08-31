
class Car {
	constructor(brand, speed){
		this.brand = brand
		this.speed = speed
	}
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

let car1 = new Car("Ford", 0) 
let car2 = new Car("Ferrari", 0) 


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


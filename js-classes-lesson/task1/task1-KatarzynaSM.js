// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)


class Cars {
	constructor (brand, speed){
		this.brand = brand;
		this.speed = speed;
	}
	accelerate(inc){
		this.speed += inc;
	}
	brake(dec){
		this.speed-=dec;
	}

	describe(){
		return this.brand + " running at " + this.speed + " km/h";
	}
}

let car = new Cars("Ford", 0);

console.log(car.describe());
car.accelerate(50);
console.log(car.describe());
car.accelerate(100);
console.log(car.describe());
car.brake(25);
console.log(car.describe());

let car2 = new Cars("Ferrari", 0);

car2.accelerate(200);
console.log(car2.describe());
car2.brake(100);
console.log(car2.describe());
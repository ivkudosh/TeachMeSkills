// --------------------Task 1
class Car {
    constructor(protected carName: string, protected engineType: number) {
    }
}


class LuxuryCar extends Car {
    constructor(carName: string, engineType: number, private maxSpeed: number, private carCost: number) {
        super(carName, engineType);
    }

    public getMaxSpeedInfo(): string {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximately cost of the car is ${this.carCost}`;
    }
}


class SportCar extends Car {
    constructor(carName: string, engineType: number, private maxSpeed: number, private carCost: number) {
        super(carName, engineType);
    }

    public getMaxSpeedInfo(): string {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximately cost of the car is ${this.carCost}`;
    }
}

const bugatti: LuxuryCar = new LuxuryCar("bugatti", 2, 300, 50000);
console.log(bugatti.getMaxSpeedInfo());


const ferrari: SportCar = new SportCar("ferrari", 1, 500, 100000);
console.log(ferrari.getMaxSpeedInfo());



// --------------------Task 2
const coupe = {
    numberDoors: 2,
    wheelSide: 'left'
};


const sedan = {
    numberDoors: 4,
    wheelSide: 'right'
};

function infoCar() {
    return `This car has ${this.numberDoors} doors and this is ${this.wheelSide}-hand drive car`;
}

console.log(infoCar.call(coupe));
console.log(infoCar.call(sedan));

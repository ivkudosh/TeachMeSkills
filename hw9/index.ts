//-------Task 1
class Animal {
    public static animalType: string;
    public readonly name: string;
    protected age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public get textInfo(): string {
        return `This is a ${Animal.animalType}. Its name is ${this.name}`;
    }
}



//-------Task 2
class Pet extends Animal {
    private address: string;
    constructor(name: string, age: number, address: string) {
        super(name, age);
        this.address = address;
    }
    public get textAddress(): string {
        return `My ${Pet.animalType} lives in ${this.address}.`;
    }
}

Animal.animalType = 'dog';

const pet = new Pet('Tom', 2, 'Minsk');
console.log(pet.textInfo);
console.log(pet.textAddress);

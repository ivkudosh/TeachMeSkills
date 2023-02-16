/**
 * NORMAL level
 */
// --------------------Task 1
interface IUser {
    name?: string;
    surname?: string;
    [key: string]: string | number | undefined | boolean;
}


const person: IUser = {
    name: "Ilya",
    surname: "Kudosh"
};

delete person.name;
delete person.surname;

console.log(person);



// --------------------Task 2
const personFromMars: IUser = {
    name: 'DAvid',
    surname: "Djugavil"
};

const checkValue = "name" in personFromMars ? true : false;

console.log(checkValue);



// --------------------Task 3
const student: IUser = {
    name: 'John',
    age: 19,
    isHappy: true
};
for (const key in student) {
    console.log(key);
}

for (const key in student) {
    console.log(student[key]);
}


// --------------------Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'reddish',
        green: 'greenish',
        blue: 'blueish'
    },
};

console.log(`${colors["ru pum pu ru rum"].red} and ${colors["ru pum pu ru rum"].blue}`);



// --------------------Task 5
const salaries: any = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    ilya: 664,
    alexandra: 199
};

const getMediumSalary = () => {
    let result = 0;
    for (const key in salaries) {
        result += salaries[key];
    }
    return result / 5;
};

console.log(getMediumSalary());



// --------------------Task 6
const building: any = {
    foundation: 1997,
    country: 'USA',
    city: 'New Jersey',
    generalInfo: function () {
        return `This building was found in ${this.foundation} year in ${this.country}, ${this.city}`;
    },
    getDescriptionTextLength: function () {
        console.log(this.generalInfo().length);
    }
};

building.getDescriptionTextLength();



// --------------------Task 7
// Done, installed eslint



/**
 * ------------------------------ADVANCED level
 * --------------------Task 1
 */
const student1 = {
    name: 'Polina',
    age: 27,
};

const student2 = {
    name: 'Polina',
    age: 27,
};

const isEqual = JSON.stringify(student1) === JSON.stringify(student2) ? "Objects are equal" : "Objects are not equal";
console.log(isEqual);



// --------------------Task 2
const cat = {
    name: 'Vitaliy',
    age: 30,
};

//tyoe 1
const cat1 = { ...cat };
cat.name = "ilya";
console.log(cat1);
//tyoe 2
const cat2 = Object.assign({}, cat);
cat.name = "Petr";
console.log(cat2);
//type 3
const cat3 = JSON.parse(JSON.stringify(cat));
cat.name = "David";
console.log(cat3);
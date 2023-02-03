/**
 * ------------------------------NORMAL level
 * -----Task 1
 */
//-----Task 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);



//-----Task 2
const secondsInMinute = 60,
    minutesInHour = 60,
    hoursInDay = 24,
    daysInYear = 365,
    myAgeInSeconds = 25 * secondsInMinute * minutesInHour * hoursInDay * daysInYear;

console.log(myAgeInSeconds);



//-----Task 3
let count = 42;
let userName = '42';

//Type 1
let countToString = String(count);
let userNameToNuber = Number(userName);

console.log(String(countToString));
console.log(Number(userNameToNuber));

//Type 2
let secondCountToString = count.toString();
let secondUserNameToNuber = parseInt(userName);

console.log(Number(secondCountToString));
console.log(Number(secondUserNameToNuber));



//-----Task 4
let a = 1;
let b = 2;
let c = "white bears";

console.log(`${a}${b} ${c}`);



//-----Task 5
const wordAcces = 'access',
    wordMarine = 'marine',
    wordIce = 'ice',
    wordGarden = 'garden',
    wordJaw = 'jaw',
    lengthWords = `${wordAcces}${wordMarine}${wordIce}${wordGarden}${wordJaw}`;

console.log(lengthWords.length);



//-----Task 6
const typeString = 'true',
    typeBoolean = false,
    typeNumber = 17,
    typeUndefined = undefined,
    typeObject = null;

console.log(typeof typeString);
console.log(typeof typeBoolean);
console.log(typeof typeNumber);
console.log(typeof typeUndefined);
console.log(typeof typeObject);



//-----Task 7
let height = 15;
let width = 20;
console.log(height > width);

//type 1
if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

//type 2
const newMessage = height > width ? height : width; //Better to use
console.log(newMessage);



//-----Task 8
let divider = 3;

for (let i = 1; i < 20; i++) {
    if (i % divider === 0) {
        console.log(i);
    }
}



//-----Task 9
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);

//type 1
if (shouldGoToWork) {
    console.log("Взял все");
} else {
    console.log("Что-то забыл");
}

//type 2
shouldGoToWork && console.log("Взял все");

//type 3
const message = shouldGoToWork ? "Взял все" : "Что-то забыл";
console.log(message); //Better to use



//-----Task 10
const enterNum = 3;

if (enterNum % 5 === 0) {
    console.log("Fizz");
}
if (enterNum % 3 === 0) {
    console.log("Buzz");
}
if (enterNum % 3 === 0 && enterNum % 5 === 0) {
    console.log("FizzBuzz");
}



//-----Task 11
const age = 19;

if (age > 18) {
    console.log("Let's go drink some beer");
} else if (age >= 16) {
    console.log("You can buy some smokes, but don't tell your mother");
} else {
    console.log("Better drink cola");
}



//-----Task 12
let direction = 'south';

switch (direction) {
    case 'south':
        console.log("you need to turn around");
        break;
    case 'north':
        console.log("your path is the straight path");
        break;
    case 'west':
        console.log("on your left");
        break;
    case 'east':
        console.log("just go to the right");
        break;
    default:
        console.log("Please enter the direction and try again.");
}



/**
 * ------------------------------ADVANCED level
 * -----Task 1
 */
let one = 4;
let two = 3;
[one, two] = [two, one];

console.log(one);
console.log(two);



//-----Task 2
let numberSign = '';

for (let i = 0; i < 6; i++) {
    numberSign += "#";
    console.log(numberSign);
}
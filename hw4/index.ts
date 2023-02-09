/**
 * NORMAL level
 */
// --------------------Task 1
const firtName: string = "Ilya";
const surname: string = "Kudosh";
const helloMessage: string = `Hello ${firtName.toUpperCase()} ${surname.toLowerCase()}\n`.repeat(5);
console.log(helloMessage);



//--------------------Task 2
const firstLine: string = "I learn TypeScript!";
const enterWord: string = "learn";
const position: number = firstLine.indexOf(enterWord);

if (position === -1) {
    console.log('There is no such substring in the original string!');
  } else {
    console.log(position);
  }



//--------------------Task 3
const str: string = 'Hello world!';
const pos: number = 3;

if (pos >= str.length) {
  console.log("You are beyond the string length");  
} else {
  console.log(`You are inside the string length and it is a character: ${str.charAt(pos)}`);
}



//--------------------Task 4
const strRandom: string = 'Hello world!.';

if (strRandom.endsWith(".")) {
  console.log("We have a finished sentence");  
} else {
  console.log("There is a dot missed.");  
}



//--------------------Task 5
const stringCut: string = "I learn TypeScript!";

// with substring
console.log(stringCut.substring(2, 8)); // learn
console.log(stringCut.substring(8, 18)); // TypeScript

// with slice
console.log(stringCut.slice(2, 8)); // learn
console.log(stringCut.slice(8, 18)); // TypeScript



//--------------------Task 6
const strArray: string = "I learn TypeScript!";
console.log(strArray.split(" "));



//--------------------Task 7
const strSpace: string = "I learn TypeScript!";
console.log(strSpace.trim());



//--------------------Task 8
const staticNumber: number = 8.829734872948;
console.log(staticNumber.toFixed(3));



//--------------------Task 9
const dynamicNumber: number = 5.97436346;

if (Number.isInteger(dynamicNumber)) {
  console.log(dynamicNumber);
} else {
  console.log(Math.round(dynamicNumber));
}



//--------------------Task 10
const numberWithDot: number = 5.97436346;

console.log(Math.floor(numberWithDot));
console.log(Math.ceil(numberWithDot));
console.log(Math.round(numberWithDot));



//--------------------Task 11
const numb: number = 5;
const exp: number = 2;
const pow: number = Math.pow(numb, exp);
console.log(pow);




//--------------------Task 12
const min: number = Math.ceil(1);
const max: number = Math.floor(9);
const getRandom: number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandom);



//--------------------Task 13
const minWithDot: number = Math.ceil(1);
const maxWithDot: number = Math.floor(9);
const getRandomWithDot: number = Math.random() * (maxWithDot - minWithDot) + minWithDot;
console.log(getRandomWithDot);



//--------------------Task 14
const date: Date = new Date();
console.log(`Current date: ${date.getMonth()}/${date.getFullYear()}/${date.getDay()}. Current time: ${date.toLocaleTimeString()}.`);

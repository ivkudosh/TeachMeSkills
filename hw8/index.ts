// /**
//  * NORMAL level
//  */
// --------------------Task 1
const fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

//Type 1
fibonacci.forEach(function (element: number) {
    console.log(element);
});
//Type 2
fibonacci.forEach((element: number) => console.log(element));



// --------------------Task 2
const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
//Type 1
const userTypeOne: string[] = users.map(function (value: string, index: number) {
    return `member ${index + 1}: ${value}`;
});
console.log(userTypeOne);
//Type 2
const userTypeTwo: string[] = users.map((value: string, index: number) => `member ${index + 1}: ${value}`);
console.log(userTypeTwo);




// --------------------Task 3
const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];
const filterOfNumbers: number[] = numbers.filter((value: number) => value >= 0);
console.log(filterOfNumbers);



// --------------------Task 4
const fibonacciTwo: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonacciTwo: number = fibonacciTwo.reduce((accumulator: number, value: number) => accumulator + value);
console.log(sumFibonacciTwo);



// --------------------Task 5
const numbersTwo: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber = numbersTwo.find((value: number) => value % 2 === 0);
console.log(evenNumber);



// --------------------Task 6
const arrayForSome: number[] = [4, 7, 8, 15];
const checkNumbers: boolean = arrayForSome.some(value => value % 3 === 0 && value % 5 === 0);
console.log(checkNumbers);



// --------------------Task 7
const arrayForEvery: number[] = [1, 2, 3, 4, 5, 6, 7];

const checkEvenNumbers = arrayForEvery.every(value => {
    const squareNumber = Math.pow(value, 2);
    const sumOfDigits = String(squareNumber).split("").reduce((acc, digit) => acc + +digit, 0);
    return sumOfDigits % 2 === 0;
});

console.log(checkEvenNumbers);


// --------------------Task 8
const menuList = new Map<string, number>([
    [`cucumber`, 300],
    [`tomato`, 200],
    [`salt`, 10],
    [`sour cream`, 110]
]);

menuList.forEach((value, key) => {
    if (value > 100) {
        console.log(key);
    }
});



// --------------------Task 9
const numbersArray = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const uniqueValues = new Set(numbersArray);
console.log(Array.from(uniqueValues));



/**
 * ------------------------------ADVANCED level
 * --------------------Task 2
 */
const accum = (s: string): string => {
    return s.split("").map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-");
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));



// --------------------Task 3
const highAndLow = (numbers: string): string => {
    const nums = numbers.split(" ").map(Number);
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    return `${max} ${min}`;
};

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
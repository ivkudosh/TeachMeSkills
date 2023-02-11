/**
 * NORMAL level
 */
// --------------------Task 1
const getSum = (numb: number): number => {
    return numb * (numb + 1) / 2;
}

console.log(getSum(100));



// --------------------Task 2
const getSumCredit = (sum: number): number => {
    const rate: number = 0.17; //17%
    const years: number = 5;
    const result: number = sum * rate * years;
    return result;
}

console.log(getSumCredit(4000));



// --------------------Task 3
const trimString = (str: string, valueFrom: number, valueTo: number): number | string => {
    return str.slice(valueFrom, valueTo);
}

console.log(trimString('Hello, how are you?', 0, 11));



// --------------------Task 4
const getSumNumbers = (num: number): number => {
    let sum: number = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(getSumNumbers(2023));



// --------------------Task 5
const getSumSecond = (a: number, b: number): number => {
    let sum: number = 0
    if (a === b) {
        return a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSumSecond(1, 5));



// --------------------Task 6
function fooboo(isTrue: boolean, foo: () => void, boo: () => void) {
    if (isTrue) {
        foo();
    } else {
        boo();
    }
}
fooboo(true, () => console.log("foo"), () => console.log("boo"));



/**
 * ------------------------------ADVANCED level
 * --------------------Task 1
 */
const getNumbers = (a: number, b: number, c: number): void => {
    if (a + b > c && b + c > a && a + c > b) {
        console.log(true);
    } else {
        console.log(false);
    }
}

getNumbers (9, 3, 9);



// --------------------Task 2
const breakChocolate = (n: number, m: number): number => {
    if ((n === 0 && m === 0) || (n === 1 && m === 1)) {
        return 0;
    } else {
        return (n - 1) + n * (m - 1);
    }
}

console.log(breakChocolate(3, 6));



// --------------------Task 3
const factorial = (number: number): number => {
    if (number != 1) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

const fizzBuzz = (arr: number[]) => {
    return arr.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "fizzBuzz";
        } else if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "buzz";
        } else {
            return num;
        }
    });
};

const arr1 = [0, 5, 2, 6, 1, 30];
const arr2 = [1, 3, 4, 5];
console.log(fizzBuzz(arr1));
console.log(fizzBuzz(arr2));
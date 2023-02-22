export { };
// /**
//  * NORMAL level
//  */
// --------------------Task 1
const colors: string[] = ["red", "green", "blue"];
console.log(colors.length);



// --------------------Task 2
const animals: string[] = ["monkey", "dog", "cat"];
const lastElem = animals[animals.length - 1];

console.log(lastElem);



// --------------------Task 3
const numbers: number[] = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbersTypeTwo: number[] = [5, 43, 63, 23, 90];
numbersTypeTwo.splice(0, numbersTypeTwo.length);
console.log(numbersTypeTwo);



// --------------------Task 4
const students: string[] = ["Polina", "Dasha", "Masha"];
const deleteLastElement = students.pop();
const addLastElement = students.push("Borya");
const deleteFirstElement = students.shift();
const addFirstElement = students.unshift("Andrey");
console.log(students);



// --------------------Task 5
const cats: string[] = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
    const el = cats[i];
    console.log(el);
}

for (const element of cats) {
    console.log(element);
}



// --------------------Task 6
const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];
const allNumbers: number[] = evenNumbers.concat(oddNumbers);
const index = allNumbers.indexOf(8);
console.log(allNumbers);
console.log(index);



// --------------------Task 7
const binary: number[] = [0, 0, 0, 0];
const arrayToString: string | number = binary.join("1");
console.log(arrayToString);



/**
 * ------------------------------ADVANCED level
 * --------------------Task 1
 */
const checkPalindrome = (str: string) => {
    const lowerWord = str.toLowerCase();
    let check = '';
    for (let i = lowerWord.length - 1; i >= 0; --i) {
        check += lowerWord[i];
    }
    return lowerWord === check;
};

console.log(checkPalindrome("peep"));





import { calculator } from "./calculator";
import { Operators } from "./operator";

export const checker = (num1: number, num2: number, operator: Operators, result: number) => {
    return calculator(num1, num2, operator) === result
        ? console.log(`Test passed: ${num1} ${operator} ${num2} = ${result}`)
        : console.log(`Test failed: ${num1} ${operator} ${num2}`);
};
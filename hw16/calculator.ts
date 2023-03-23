import { Operators } from "./operator";

export const calculator = (num1: number, num2: number, operator: Operators) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "^":
            return num1 ** num2;
    }
};

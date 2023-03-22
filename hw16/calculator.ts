export const calculator = (num1: number, num2: number, operator: '+' | '-' | '/' | '*' | '^') => {
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

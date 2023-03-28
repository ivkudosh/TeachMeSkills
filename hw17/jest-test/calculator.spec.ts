import { Calculator } from "../src/calculator";
import { expect } from "@jest/globals";

let calculator: any;

describe("Addition operation", () => {
    beforeAll(() => {
        calculator = new Calculator();
    });

    afterAll(() => {
        calculator = null;
    });

    test("Should add positive numbers", () => {
        expect(calculator.getAddition(1, 9)).toStrictEqual(10);
    });

    test("Should add negative numbers", () => {
        expect(calculator.getAddition(-1, -10)).toStrictEqual(-11);
    });

    test("Should add negative and positive numbers", () => {
        expect(calculator.getAddition(-1, 10)).toStrictEqual(9);
    });

    test("Should display error if actual and expected result are different in addition operation", () => {
        expect(calculator.getAddition(10, 10)).toStrictEqual(0);
    });
});

describe("Multiplication operation", () => {
    beforeAll(() => {
        calculator = new Calculator();
    });

    afterAll(() => {
        calculator = null;
    });

    test("Should multiply positive numbers", () => {
        expect(calculator.getMultiplication(10, 10)).toStrictEqual(100);
    });

    test("Should multiply negative numbers", () => {
        expect(calculator.getMultiplication(-10, -10)).toStrictEqual(100);
    });

    test("Should multiply negative and positive numbers", () => {
        expect(calculator.getMultiplication(-1, 10)).toStrictEqual(-10);
    });

    test("Should display error if actual and expected result are different in multiplication operation", () => {
        expect(calculator.getMultiplication(1, 10)).toStrictEqual(0);
    });
});

describe("Subtraction operation", () => {
    beforeAll(() => {
        calculator = new Calculator();
    });

    afterAll(() => {
        calculator = null;
    });

    test("Should subtract positive numbers", () => {
        expect(calculator.getSubtraction(10, 9)).toStrictEqual(1);
    });

    test("Should subtract negative numbers", () => {
        expect(calculator.getSubtraction(-10, -10)).toStrictEqual(0);
    });

    test("Should subtract negative and positive numbers", () => {
        expect(calculator.getSubtraction(10, -1)).toStrictEqual(11);
    });

    test("Should display error if actual and expected result are different in subtraction operation", () => {
        expect(calculator.getSubtraction(10, 1)).toStrictEqual(-9);
    });
});

describe("Division operation", () => {
    beforeAll(() => {
        calculator = new Calculator();
    });

    afterAll(() => {
        calculator = null;
    });

    test("Should divide positive numbers", () => {
        expect(calculator.getDivision(10, 2)).toStrictEqual(5);
    });

    test("Should divide negative numbers", () => {
        expect(calculator.getDivision(-10, -10)).toStrictEqual(1);
    });

    test("Should divide negative and positive numbers", () => {
        expect(calculator.getDivision(-10, 5)).toStrictEqual(-2);
    });

    test("Should display error if actual and expected result are different in division operation", () => {
        expect(calculator.getDivision(10, 5)).toStrictEqual(-2);
    });
});
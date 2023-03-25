import { Calculator } from "../src/calculator";
import { expect } from "@jest/globals";
import { ADDITION_NUMBERS, MULTIPLICATION_NUMBERS, SUBTRACTION_NUMBERS, DIVISION_NUMBERS } from "../src/constants/constants";

let calculator: any;

describe("Operations of addition, multiplication, subtraction, division, ", () => {
    beforeAll(() => {
        calculator = new Calculator();
    });

    afterAll(() => {
        calculator = null;
    });
    //Addition operation
    test("Should add positive numbers", () => {
        expect(calculator.getSumAddition(1, 9)).toStrictEqual(10);
    });

    test("Should add negative numbers", () => {
        expect(calculator.getSumAddition(-1, -10)).toStrictEqual(-11);
    });

    test("Should add negative and positive numbers", () => {
        expect(calculator.getSumAddition(-1, 10)).toStrictEqual(9);
    });

    test("Should display error if actual and expected result are different in addition operation", () => {
        expect(calculator.getSumAddition(10, 10)).toStrictEqual(0);
    });
    //Multiplication operation
    test("Should multiply positive numbers", () => {
        expect(calculator.getSumMultiplication(10, 10)).toStrictEqual(100);
    });

    test("Should multiply negative numbers", () => {
        expect(calculator.getSumMultiplication(-10, -10)).toStrictEqual(100);
    });

    test("Should multiply negative and positive numbers", () => {
        expect(calculator.getSumMultiplication(-1, 10)).toStrictEqual(-10);
    });

    test("Should display error if actual and expected result are different in multiplication operation", () => {
        expect(calculator.getSumMultiplication(1, 10)).toStrictEqual(0);
    });
    // Subtraction operation
    test("Should subtract positive numbers", () => {
        expect(calculator.getSumSubtraction(10, 9)).toStrictEqual(1);
    });

    test("Should subtract negative numbers", () => {
        expect(calculator.getSumSubtraction(-10, -10)).toStrictEqual(0);
    });

    test("Should subtract negative and positive numbers", () => {
        expect(calculator.getSumSubtraction(10, -1)).toStrictEqual(11);
    });

    test("Should display error if actual and expected result are different in subtraction operation", () => {
        expect(calculator.getSumSubtraction(10, 1)).toStrictEqual(-9);
    });
    // Division operation
    test("Should divide positive numbers", () => {
        expect(calculator.getSumDivision(10, 2)).toStrictEqual(5);
    });

    test("Should divide negative numbers", () => {
        expect(calculator.getSumDivision(-10, -10)).toStrictEqual(1);
    });

    test("Should divide negative and positive numbers", () => {
        expect(calculator.getSumDivision(-10, 5)).toStrictEqual(-2);
    });

    test("Should display error if actual and expected result are different in division operation", () => {
        expect(calculator.getSumDivision(10, 5)).toStrictEqual(-2);
    });
});
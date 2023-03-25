import { Calculator } from "../src/calculator";
import { ADDITION_NUMBERS, MULTIPLICATION_NUMBERS, SUBTRACTION_NUMBERS, DIVISION_NUMBERS } from "../src/constants/constants";
import { expect } from "chai";

let calculator: any;

describe("Operations of addition, multiplication, subtraction, division, ", () => {
    before(() => {
        calculator = new Calculator();
    });

    after(() => {
        calculator = null;
    });
    //Addition operation
    it("Should add positive numbers", () => {
        expect(calculator.getSumAddition(1, 9), ADDITION_NUMBERS).to.equal(10);
    });

    it("Should add negative numbers", () => {
        expect(calculator.getSumAddition(-1, -10), ADDITION_NUMBERS).to.equal(-11);
    });

    it("Should add negative and positive numbers", () => {
        expect(calculator.getSumAddition(-1, 10), ADDITION_NUMBERS).to.equal(9);
    });

    it("Should display error if actual and expected result are different in addition operation", () => {
        expect(calculator.getSumAddition(10, 10), ADDITION_NUMBERS).to.equal(0);
    });
    //Multiplication operation
    it("Should multiply positive numbers", () => {
        expect(calculator.getSumMultiplication(10, 10), MULTIPLICATION_NUMBERS).to.equal(100);
    });

    it("Should multiply negative numbers", () => {
        expect(calculator.getSumMultiplication(-10, -10), MULTIPLICATION_NUMBERS).to.equal(100);
    });

    it("Should multiply negative and positive numbers", () => {
        expect(calculator.getSumMultiplication(-1, 10), MULTIPLICATION_NUMBERS).to.equal(-10);
    });

    it("Should display error if actual and expected result are different in multiplication operation", () => {
        expect(calculator.getSumMultiplication(1, 10), MULTIPLICATION_NUMBERS).to.equal(0);

    });
    // Subtraction operation
    it("Should subtract positive numbers", () => {
        expect(calculator.getSumSubtraction(10, 9), SUBTRACTION_NUMBERS).to.equal(1);
    });

    it("Should subtract negative numbers", () => {
        expect(calculator.getSumSubtraction(-10, -10), SUBTRACTION_NUMBERS).to.equal(0);
    });

    it("Should subtract negative and positive numbers", () => {
        expect(calculator.getSumSubtraction(10, -1), SUBTRACTION_NUMBERS).to.equal(11);
    });

    it("Should display error if actual and expected result are different in subtraction operation", () => {
        expect(calculator.getSumSubtraction(10, 1), SUBTRACTION_NUMBERS).to.equal(-9);
    });
    // Division operation
    it("Should divide positive numbers", () => {
        expect(calculator.getSumDivision(10, 2), DIVISION_NUMBERS).to.equal(5);
    });

    it("Should divide negative numbers", () => {
        expect(calculator.getSumDivision(-10, -10), DIVISION_NUMBERS).to.equal(1);
    });

    it("Should divide negative and positive numbers", () => {
        expect(calculator.getSumDivision(-10, 5), DIVISION_NUMBERS).to.equal(-2);
    });

    it("Should display error if actual and expected result are different in division operation", () => {
        expect(calculator.getSumDivision(10, 5), DIVISION_NUMBERS).to.equal(-2);
    });
});
import { Calculator } from "../src/calculator";
import { ADDITION_ERROR_MESSAGE, MULTIPLICATION_ERROR_MESSAGE, SUBTRACTION_ERROR_MESSAGE, DIVISION_ERROR_MESSAGE } from "../src/constants/constants";
import { expect } from "chai";

let calculator: any;

describe("Addition operation", () => {
    before(() => {
        calculator = new Calculator();
    });

    after(() => {
        calculator = null;
    });

    it("Should add positive numbers", () => {
        expect(calculator.getAddition(1, 9), ADDITION_ERROR_MESSAGE).to.equal(10);
    });

    it("Should add negative numbers", () => {
        expect(calculator.getAddition(-1, -10), ADDITION_ERROR_MESSAGE).to.equal(-11);
    });

    it("Should add negative and positive numbers", () => {
        expect(calculator.getAddition(-1, 10), ADDITION_ERROR_MESSAGE).to.equal(9);
    });
});

describe("Multiplication operation", () => {
    before(() => {
        calculator = new Calculator();
    });

    after(() => {
        calculator = null;
    });

    it("Should multiply positive numbers", () => {
        expect(calculator.getMultiplication(10, 10), MULTIPLICATION_ERROR_MESSAGE).to.equal(100);
    });

    it("Should multiply negative numbers", () => {
        expect(calculator.getMultiplication(-10, -10), MULTIPLICATION_ERROR_MESSAGE).to.equal(100);
    });

    it("Should multiply negative and positive numbers", () => {
        expect(calculator.getMultiplication(-1, 10), MULTIPLICATION_ERROR_MESSAGE).to.equal(-10);
    });
});

describe("Subtraction operation", () => {
    before(() => {
        calculator = new Calculator();
    });

    after(() => {
        calculator = null;
    });

    it("Should subtract positive numbers", () => {
        expect(calculator.getSubtraction(10, 9), SUBTRACTION_ERROR_MESSAGE).to.equal(1);
    });

    it("Should subtract negative numbers", () => {
        expect(calculator.getSubtraction(-10, -10), SUBTRACTION_ERROR_MESSAGE).to.equal(0);
    });

    it("Should subtract negative and positive numbers", () => {
        expect(calculator.getSubtraction(10, -1), SUBTRACTION_ERROR_MESSAGE).to.equal(11);
    });
});

describe("Division operation", () => {
    before(() => {
        calculator = new Calculator();
    });

    after(() => {
        calculator = null;
    });

    it("Should divide positive numbers", () => {
        expect(calculator.getDivision(10, 2), DIVISION_ERROR_MESSAGE).to.equal(5);
    });

    it("Should divide negative numbers", () => {
        expect(calculator.getDivision(-10, -10), DIVISION_ERROR_MESSAGE).to.equal(1);
    });

    it("Should divide negative and positive numbers", () => {
        expect(calculator.getDivision(-10, 5), DIVISION_ERROR_MESSAGE).to.equal(-2);
    });
});


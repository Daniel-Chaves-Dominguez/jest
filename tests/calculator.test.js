const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('can add two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('can multiply two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });
});
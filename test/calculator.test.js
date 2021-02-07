
import Calculator from "../src/calculator";

describe('String Calculator', function () {
  test('Test#1 - Empty String', function () {
    let calculator = new Calculator();
    expect(calculator.add("")).toBe(0);
  });
  test('Test#1.1 - Two Strings separete by commas', function () {
    let calculator = new Calculator();
    expect(calculator.add("1,2")).toBe(3);
  });
  test('Test#2 - Unknown Amount of Numbers', function () {
    let calculator = new Calculator();
    expect(calculator.add("1,2,3,56,78,88")).toBe(228);
  });
  test('Test#3 - New Lines Between Numbers with commas', function () {
    let calculator = new Calculator();
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test('Test#4 - Support Different Delimiters', function () {
    let calculator = new Calculator();
    expect(calculator.add("//;\n1;2")).toBe(3); // //[delimiter]\n[numbers…]
  });
  test('Test#5 - Negatives Numbers', function () {
    let calculator = new Calculator();
    expect(() => {
      calculator.add('1,-5,-2');
    }).toThrow();
  });
  test('Test#6 - Numbers bigger than 1000 should be ignored', function () {
    let calculator = new Calculator();
    expect(calculator.add("2,1001")).toBe(2);
  });
  test('Test#7 - Delimiters can be of any length', function () {
    let calculator = new Calculator();
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });
});


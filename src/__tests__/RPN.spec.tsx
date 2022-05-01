import { RPN } from "../libs/RPN";

describe("Reverse Polish Notation", () => {
  let rpn: RPN;

  beforeAll(() => {
    rpn = new RPN();
  });

  it("should correctly evaluate the expression: 10 3 +", () => {
    const result = rpn.evaluate("10 3 +");

    expect(result).toBe(13);
  });

  it("should correctly evaluate the expression: 10 3 2 + -", () => {
    const result = rpn.evaluate("10 3 2 + -");

    expect(result).toBe(5);
  });

  it("should correctly evaluate the expression: 10 3 * 2 ^", () => {
    const result = rpn.evaluate("10 3 * 2 ^");

    expect(result).toBe(900);
  });

  it("should correctly evaluate the expression: 4 13 5 / +", () => {
    const result = rpn.evaluate("4 13 5 / +");

    expect(result).toBe(6);
  });

  it("should correctly evaluate the expression: 3 4 + 2 * 1 +", () => {
    const result = rpn.evaluate("3 4 + 2 * 1 +");

    expect(result).toBe(15);
  });

  it("should throw an error if an non-supported operand is found", () => {
    expect.assertions(1);
    expect(() => rpn.evaluate("3 4 + 2 * 1 ?")).toThrow(
      "Invalid operator used: '?'"
    );
  });

  it("should throw an error if an evaluation don't have 2 elements", () => {
    expect(() => rpn.evaluate("3 +")).toThrow(
      "Invalid expression. Missing operands for operator: +"
    );
  });

  it("should throw an error on empty expressions", () => {
    expect(() => rpn.evaluate("")).toThrow("Empty expression.");
  });

  it("should throw an invalid expression error, if its invalid", () => {
    expect(() => {
      rpn.evaluate("3 4 + *");
    }).toThrow("Invalid expression.");
  });
});

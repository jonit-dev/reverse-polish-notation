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
});

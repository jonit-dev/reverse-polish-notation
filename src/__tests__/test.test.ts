import { Test } from "../libs/Test";

describe("test add function", () => {
  let test: Test;
  beforeAll(() => {
    test = new Test();
  });

  it("should return 15 for add(10,5)", () => {
    expect(test.sum(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(test.sum(2, 3)).toBe(5);
  });
});

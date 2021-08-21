import { sum, getTwoStringsLengths, sumDigitsFromInput } from "./1";

describe("Sum", () => {
  test("two digits", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(-1, 4)).toBe(3);
  });
  test("array and digit", () => {
    expect(sum([1], 2)).toBe(NaN);
  });
  test("string and digit", () => {
    expect(sum("21", 3)).toBe(NaN);
  });
  test("one digit", () => {
    expect(sum(1)).toBe(NaN);
  });
});

describe("getTwoStringsLengths", () => {
  test("two strings", () => {
    expect(getTwoStringsLengths("one", "two")).toBe(6);
    expect(getTwoStringsLengths("1", "22")).toBe(3);
  });
  test("string and array", () => {
    expect(getTwoStringsLengths("one", ["two"])).toBe(null);
  });
  test("empty string and string", () => {
    expect(getTwoStringsLengths("one", "")).toBe(3);
  });
});

describe("sumDigitsFromInput", () => {
  test("sum digits of 3-digit number", () => {
    const value = [
      ["123", 6],
      ["234", 9],
      ["101", 2],
    ];
    value.forEach((val) => {
      jest.spyOn(window, "prompt").mockImplementation(() => val[0]);
      const log = jest.spyOn(console, "log");
      sumDigitsFromInput();
      expect(log).toHaveBeenCalledWith(val[1]);
    });
  });
  test("test invalid input", () => {
    const value = [
      ["23", "Invalid input"],
      ["34", "Invalid input"],
      ["1a1", "Invalid input"],
    ];
    value.forEach((val) => {
      jest.spyOn(window, "prompt").mockImplementation(() => val[0]);
      const log = jest.spyOn(console, "log");
      sumDigitsFromInput();
      expect(log).toHaveBeenCalledWith(val[1]);
    });
  });
});

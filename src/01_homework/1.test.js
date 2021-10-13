import { sum, getTwoStringsLengths, sumDigitsFromInput } from "./1";

describe("Sum", () => {
  const values = [
    [1, 3, 4],
    [-1, 2, 1],
    [[1], 2, NaN],
    ["21", 3, NaN],
    [1, null, NaN],
  ];
  test.each(values)(`Given %p and %p expect %p`, (num1, num2, res) => {
    expect(sum(num1, num2)).toBe(res);
  });
});

describe("getTwoStringsLengths", () => {
  const values = [
    ["one", "two", 6],
    ["1", "22", 3],
    ["one", ["two"], null],
    ["one", "", 3],
  ];
  test.each(values)(`Given %p and %p expect %p`, (str1, str2, res) => {
    expect(getTwoStringsLengths(str1, str2)).toBe(res);
  });
});

describe("sumDigitsFromInput", () => {
  const values = [
    ["123", 6],
    ["234", 9],
    ["101", 2],
    ["23", "Invalid input"],
    ["34", "Invalid input"],
    ["1a1", "Invalid input"],
  ];
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test.each(values)(`Sum digits of %p and get %p`, (number, res) => {
    jest.spyOn(window, "prompt").mockImplementation(() => number);
    sumDigitsFromInput();
    expect(log).toHaveBeenCalledWith(res);
  });
});

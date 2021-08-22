import { getMax, getMonth, isCircleInSquare } from "./2";

describe("Find max number", () => {
  let values = Array.from({ length: 10 }, () =>
    Array.from({ length: 2 }, () => Math.floor(Math.random() * 20))
  );
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test.each(values)("Find max of %p and %p", (num1, num2) => {
    getMax(num1, num2);
    expect(log).toHaveBeenCalledWith(Math.max(num1, num2));
  });

  values = [
    [[1], 2],
    ["1", 2],
    [2, null],
  ];
  test.each(values)('Given %p and %p and get "Invalid args"', (num1, num2) => {
    getMax(num1, num2);
    expect(log).toHaveBeenCalledWith("Invalid args");
  });
});

describe("Get month by value", () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  function checkMonth(month, res) {
    jest.spyOn(window, "prompt").mockReturnValueOnce(month);
    getMonth();
    expect(log).toHaveBeenCalledWith(res);
  }

  const months = [
    ["1", "January"],
    ["3", "March"],
    ["12", "December"],
    ["0", "Invalid input"],
    ["13", "Invalid input"],
    ["", "Invalid input"],
    ["test", "Invalid input"],
  ];
  test.each(months)("%p month expected to be %p", (month, res) => {
    checkMonth(month, res);
  });
});

describe("Circle in square", () => {
  test("circle inside square", () => {
    expect(isCircleInSquare(10, 10)).toBeFalsy();
    expect(isCircleInSquare(5, 10)).toBeTruthy();
    expect(isCircleInSquare(0, 0)).toBeTruthy();
  });

  const values = [
    [5, null],
    [10, "5"],
    ["1", "5"],
  ];
  test.each(values)("Invalid args %p and %p, returning null", (arg1, arg2) => {
    expect(isCircleInSquare(arg1, arg2)).toBeNull();
  });
});

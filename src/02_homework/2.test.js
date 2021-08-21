import { getMax, getMonth, isCircleInSquare } from "./2";

describe("Find max number", () => {
  const N = 10;
  test("two digits", () => {
    const log = jest.spyOn(console, "log");
    for (let i = 0; i < N; i += 1) {
      const num1 = Math.random();
      const num2 = Math.random();
      getMax(num1, num2);
      expect(log).toHaveBeenCalledWith(Math.max(num1, num2));
    }
  });
  test("array and digit", () => {
    const log = jest.spyOn(console, "log");
    getMax([1], 2);
    expect(log).toHaveBeenCalledWith("Invalid args");
  });
  test("string and digit", () => {
    const log = jest.spyOn(console, "log");
    getMax("1", 2);
    expect(log).toHaveBeenCalledWith("Invalid args");
  });
  test("one digit", () => {
    const log = jest.spyOn(console, "log");
    getMax(2);
    expect(log).toHaveBeenCalledWith("Invalid args");
  });
});

describe("Get month by value", () => {
  function checkMonth(months) {
    const log = jest.spyOn(console, "log");
    months.forEach((val) => {
      jest.spyOn(window, "prompt").mockImplementation(() => val[0]);
      getMonth();
      expect(log).toHaveBeenCalledWith(val[1]);
    });
  }

  test("get month by proper value", () => {
    const months = [
      ["1", "January"],
      ["3", "March"],
      ["12", "December"],
    ];
    checkMonth(months);
  });
  test("out-of-range number", () => {
    const months = [
      ["0", "Invalid input"],
      ["13", "Invalid input"],
    ];
    checkMonth(months);
  });
  test("not a number", () => {
    const months = [
      ["", "Invalid input"],
      ["test", "Invalid input"],
    ];
    checkMonth(months);
  });
});

describe("Circle in square", () => {
  test("circle inside square", () => {
    expect(isCircleInSquare(10, 10)).toBeFalsy();
    expect(isCircleInSquare(5, 10)).toBeTruthy();
    expect(isCircleInSquare(0, 0)).toBeTruthy();
  });
  test("one argument", () => {
    expect(isCircleInSquare(10)).toBeNull();
    expect(isCircleInSquare(5)).toBeNull();
  });
  test("incorrect arguments", () => {
    expect(isCircleInSquare(10, "5")).toBeNull();
    expect(isCircleInSquare("1", "5")).toBeNull();
  });
});

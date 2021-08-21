/**
 * @jest-environment jsdom
 */
const { sumArr, doubleArr, maxMinArr } = require("./5");

describe("Sum array elements", () => {
  test("Sum 10 digits in array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const log = jest.spyOn(console, "log");
    sumArr(arr);
    expect(log).toHaveBeenCalledWith(55);
  });
  test("Throw length error", () => {
    try {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      sumArr(arr);
    } catch (e) {
      expect(e.message).toBe("length != 10");
    }
  });
  test("Throw NaN error", () => {
    const inValue = "a";
    try {
      const arr = [1, 2, 3, 4, inValue, 6, 7, 8, 9, 10];
      sumArr(arr);
    } catch (e) {
      expect(e.message).toBe(`Value ${inValue} is NaN`);
    }
  });
});

describe("Double array elements", () => {
  test("Double 5-length array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(doubleArr(arr)).toEqual([2, 4, 6, 8, 10]);
  });
  test("Throw NaN error", () => {
    const inValue = "a";
    try {
      const arr = [1, 2, 3, 4, inValue, 6, 7, 8, 9, 10];
      doubleArr(arr);
    } catch (e) {
      expect(e.message).toBe(`Value ${inValue} is NaN`);
    }
  });
});

describe("Max min array elements", () => {
  test("Max min elements in5-length array", () => {
    const arr = [10, 20, 3, 4, 5];
    const log = jest.spyOn(console, "log");
    maxMinArr(arr);
    expect(log).toHaveBeenCalledWith(
      `Max: ${Math.max(...arr)}; Min: ${Math.min(...arr)}`
    );
  });
  test("Throw NaN error for the first element", () => {
    const inValue = "a";
    try {
      const arr = [inValue, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      maxMinArr(arr);
    } catch (e) {
      expect(e.message).toBe(`Value ${inValue} is NaN`);
    }
  });
  test("Throw NaN error for any element", () => {
    const inValue = "a";
    try {
      const arr = [1, 2, 3, 4, inValue, 6, 7, 8, 9, 10];
      maxMinArr(arr);
    } catch (e) {
      expect(e.message).toBe(`Value ${inValue} is NaN`);
    }
  });
  test("Throw empty array", () => {
    try {
      const arr = [];
      maxMinArr(arr);
    } catch (e) {
      expect(e.message).toBe("Array is empty");
    }
  });
});

import { sumArr, doubleArr, maxMinArr } from "./5";

describe("Sum array elements", () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Sum 10 digits in array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sumArr(arr);
    expect(log).toHaveBeenCalledWith(55);
  });
  const values = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], "length != 10"],
    [[1, 2, 3, 4, "a", 6, 7, 8, 9, 10], "Value a is NaN"],
  ];
  test.each(values)("%p throws %p", (arr, err) => {
    try {
      sumArr(arr);
    } catch (e) {
      expect(e.message).toBe(err);
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
  const values = [
    { arr: ["a", 2, 3, 4, 5, 6, 7, 8, 9] },
    { arr: [1, 2, 3, 4, "a", 6, 7, 8, 9, 10] },
  ];
  test.each(values)("$arr throws Value a is NaN", (obj) => {
    try {
      maxMinArr(obj.arr);
    } catch (e) {
      expect(e.message).toBe("Value a is NaN");
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

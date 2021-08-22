import { isRightTriangle, getCircleLengthAndSquare, quadrEquation } from "./9";

describe("Check right triangle", () => {
  let values = [
    { arr: [1, null, 2], err: "Arg is NaN" },
    { arr: [1, 2, "3"], err: "Arg is NaN" },
    { arr: [1, -5, 2], err: "Arg <= 0" },
    { arr: [1, -6, 3], err: "Arg <= 0" },
  ];
  test.each(values)("$arr throws $err", (obj) => {
    try {
      isRightTriangle(...obj.arr);
    } catch (e) {
      expect(e.message).toBe(obj.err);
    }
  });
  values = [[[5, 3, 4]], [[1, 1, Math.sqrt(2)]]];
  test.each(values)("%p is correct right triangle", (val) => {
    expect(isRightTriangle(...val)).toBeTruthy();
  });
});

describe("Get length and square of circle", () => {
  let prompt;
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
    prompt = jest.spyOn(window, "prompt");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  let values = ["-1", "0", "a"];
  test.each(values)('%p is "Invalid radius"', (radius) => {
    try {
      prompt.mockReturnValueOnce(radius);
    } catch (e) {
      expect(getCircleLengthAndSquare()).toThrow("Invalid radius");
    }
  });
  values = ["3", "4", "2.2"];
  test.each(values)("Circle of radius %p", (radius) => {
    prompt.mockReturnValueOnce(radius);
    getCircleLengthAndSquare();
    expect(log).toHaveBeenCalledWith(
      `Length: ${(2 * Math.PI * +radius).toFixed(10)}, Square: ${(
        Math.PI *
        (+radius) ** 2
      ).toFixed(10)}`
    );
  });
});

describe("Get roots of quadratic equation", () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  let values = [{ arr: [1, null, 2] }, { arr: [1, 2, "3"] }];
  test.each(values)('$arr throws "Arg is NaN"', (obj) => {
    try {
      quadrEquation(...obj.arr);
    } catch (e) {
      expect(e.message).toBe("Arg is NaN");
    }
  });
  values = [{ arr: [1, -3, 4] }, { arr: [1, -3, 5] }];
  test.each(values)("$arr has no real roots", (obj) => {
    quadrEquation(...obj.arr);
    expect(log).toHaveBeenCalledWith("No real roots");
  });
  values = [
    { arr: [-4, 12, -9], roots: [1.5, 1.5] },
    { arr: [2, -11, 5], roots: [5, 0.5] },
  ];
  test.each(values)("$arr has roots $roots", (obj) => {
    quadrEquation(...obj.arr);
    expect(log).toHaveBeenCalledWith(
      `x1 = ${obj.roots[0]}, x2 = ${obj.roots[1]}`
    );
  });
});

import { getSumOfRange, multiplicationTable, getAverageOfOdds } from "./3";

describe("Test 3 task", () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("Get sum of arithmetic progression", () => {
    const values = [
      [50, 99, 3725],
      [0, 49, 1225],
      [-50, 50, 0],
      [1, 28, 406],
      [50, "100", "Invalid args"],
      ["100", null, "Invalid args"],
    ];
    test.each(values)(
      "With start %p and finish %p sum of progression is %p",
      (start, fin, sum) => {
        getSumOfRange(start, fin);
        expect(log).toHaveBeenCalledWith(sum);
      }
    );
  });

  describe("Multiplication table", () => {
    test("table in range 1-9", () => {
      for (let i = 1; i < 10; i += 1) {
        multiplicationTable(i);
        for (let j = 1; j < 10; j += 1) {
          expect(log).toHaveBeenCalledWith(`${i} x ${j} = ${i * j}`);
        }
      }
    });
    test("incorrect arg", () => {
      multiplicationTable("not a number");
      expect(log).toHaveBeenCalledWith("Invalid arg");
    });
  });

  describe("Average sum of odds", () => {
    function checkAverage(value, res, cb) {
      jest.spyOn(window, "prompt").mockReturnValueOnce(value);
      cb();
      expect(log).toHaveBeenCalledWith(res);
    }

    const values = [
      [5, 3],
      [10, 5],
      [50, 25],

      [-2, "Value >=1"],
      ["isNan", "Value is NaN"],
    ];
    test.each(values)("Sum odds of %p and get %p", (value, res) => {
      checkAverage(value, res, getAverageOfOdds);
    });
  });
});

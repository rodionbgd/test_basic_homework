import { getDay, getMinutes, isOlder } from "./8";

describe("Get day by date", () => {
  let prompt;
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
    prompt = jest.spyOn(window, "prompt");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  let values = ["1.2", "1", "1.2.3.4", "1,2,3"];
  test.each(values)('%p throws "Arg != 3"', (val) => {
    try {
      prompt.mockImplementationOnce(() => val);
    } catch (e) {
      expect(getDay()).toThrow("Arg != 3");
    }
  });
  values = [
    ["11.a.2021", "Invalid value: -a"],
    ["-11.11.2021", "Invalid value: -11"],
  ];
  test.each(values)("%p throws %p", (val, err) => {
    try {
      prompt.mockImplementationOnce(() => val);
    } catch (e) {
      expect(getDay()).toThrow(err);
    }
  });

  values = ["11.33.2021", "221.11.2021"];
  test.each(values)('%p throws "Invalid date"', (val) => {
    prompt.mockImplementationOnce(() => val);
    getDay();
    expect(log).toHaveBeenCalledWith("Invalid Date");
  });
  values = [
    ["08.09.2021", "Wednesday"],
    ["01.08.2021", "Sunday"],
  ];
  test.each(values)("%p is %p", (val, res) => {
    prompt.mockImplementationOnce(() => val);
    getDay();
    expect(console.log).toHaveBeenCalledWith(res);
  });
});

describe("Get minutes of day", () => {
  test("Get minutes", () => {
    for (let hour = 0; hour < 10; hour += 1) {
      for (let min = 0; min < 10; min += 1) {
        const log = jest.spyOn(console, "log");
        jest
          .useFakeTimers("modern")
          .setSystemTime(new Date(`2021-08-08T0${hour}:0${min}:00`));
        getMinutes();
        expect(log).toHaveBeenCalledWith(hour * 60 + min);
      }
    }
  });
});

describe("Who is older", () => {
  let values = [
    ["1.2.3", "Args < 2"],
    ["1.2", "Args < 2"],
  ];
  test.each(values)("%p throws %p", (val, err) => {
    try {
      isOlder(val);
    } catch (e) {
      expect(e.message).toBe(err);
    }
  });
  values = [
    ["1.2.2021", "1.2", "Invalid Arg"],
    ["1.2", "1.2.2021", "Invalid Arg"],
    ["1.2.3.4", "1.2", "Invalid Arg"],
    ["1,2,3", "1.2.2021", "Invalid Arg"],
    ["11.a.2021", "11.1.2021", "Invalid value: a"],
    ["-11.11.2021", "1.2.2021", "Invalid value: -11"],
    ["11.33.2021", "1.2.2021", "Invalid Date"],
    ["221.11.2021", "1.2.2021", "Invalid Date"],
  ];
  test.each(values)("%p and %p throws %p", (val1, val2, err) => {
    try {
      isOlder(val1, val2);
    } catch (e) {
      expect(e.message).toBe(err);
    }
  });
  values = [
    ["08.08.2021", "1.12.2021", true],
    ["09.09.2021", "08.08.2020", false],
  ];
  test.each(values)("%p is older %p expect to be %p", (val1, val2, res) => {
    expect(isOlder(val1, val2)).toBe(res);
  });
});

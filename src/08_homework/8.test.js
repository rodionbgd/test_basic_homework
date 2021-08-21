import { getDay, getMinutes, isOlder } from "./8";

describe("Get day by date", () => {
  let prompt;
  let originalPrompt;
  const originalConsoleLog = console.log;
  beforeEach(() => {
    console.log = jest.fn();
    originalPrompt = window.prompt;
    prompt = jest.spyOn(window, "prompt");
  });
  afterEach(() => {
    window.prompt = originalPrompt;
  });
  afterAll(() => {
    console.log = originalConsoleLog;
  });
  test("Invalid number of args", () => {
    const values = ["1.2", "1", "1.2.3.4", "1,2,3"];
    values.forEach((value) => {
      try {
        prompt.mockImplementationOnce(() => value);
      } catch (e) {
        expect(getDay()).toThrow("Arg != 3");
      }
    });
  });
  test("Invalid value of arg", () => {
    const values = [
      ["11.a.2021", "Invalid value: -a"],
      ["-11.11.2021", "Invalid value: -11"],
    ];
    values.forEach((value) => {
      try {
        prompt.mockImplementationOnce(() => value[0]);
      } catch (e) {
        expect(getDay()).toThrow(value[1]);
      }
    });
  });
  test("Invalid date", () => {
    const values = ["11.33.2021", "221.11.2021"];
    values.forEach((value) => {
      const log = jest.spyOn(console, "log");
      prompt.mockImplementationOnce(() => value);
      getDay();
      expect(log).toHaveBeenCalledWith("Invalid Date");
    });
  });
  test("Correct date", () => {
    const values = [
      ["08.09.2021", "Wednesday"],
      ["01.08.2021", "Sunday"],
    ];
    values.forEach((value) => {
      prompt.mockImplementationOnce(() => value[0]);
      getDay();
      expect(console.log).toHaveBeenCalledWith(value[1]);
    });
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
  test("Few args", () => {
    const values = ["1.2.3", "1.2"];
    values.forEach((value) => {
      try {
        isOlder(value);
      } catch (e) {
        expect(e.message).toBe("Args < 2");
      }
    });
  });
  test("Invalid number of args", () => {
    const values = [
      ["1.2.2021", "1.2"],
      ["1.2", "1.2.2021"],
      ["1.2.3.4", "1.2"],
      ["1,2,3", "1.2.2021"],
    ];
    values.forEach((value) => {
      try {
        isOlder(value[0], value[1]);
      } catch (e) {
        expect(e.message).toBe("Arg != 3");
      }
    });
  });
  test("Invalid value of arg", () => {
    const values = [
      ["11.a.2021", "11.1.2021", "Invalid value: a"],
      ["-11.11.2021", "1.2.2021", "Invalid value: -11"],
    ];
    values.forEach((value) => {
      try {
        isOlder(value[0], value[1]);
      } catch (e) {
        expect(e.message).toBe(value[2]);
      }
    });
  });
  test("Invalid date", () => {
    const values = [
      ["11.33.2021", "1.2.2021"],
      ["221.11.2021", "1.2.2021"],
    ];
    values.forEach((value) => {
      try {
        isOlder(value[0], value[1]);
      } catch (e) {
        expect(e.message).toBe("Invalid Date");
      }
    });
  });
  test("Correct dates", () => {
    const values = [
      ["08.08.2021", "1.12.2021", true],
      ["09.09.2021", "08.08.2020", false],
    ];
    values.forEach((value) => {
      expect(isOlder(value[0], value[1])).toBe(value[2]);
    });
  });
});

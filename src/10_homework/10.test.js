/**
 * @jest-environment jsdom
 */
const { isDateAddressEmail } = require("./10");

describe("Regular expression", () => {
  let originalPrompt;
  let prompt;
  beforeEach(() => {
    originalPrompt = window.prompt;
    prompt = jest.spyOn(window, "prompt");
  });
  afterEach(() => {
    window.prompt = originalPrompt;
  });
  test("Incorrect data", () => {
    const values = [
      "25.25.2021",
      "31.11.2021",
      "!!test@gmail.com",
      "+8(123)123-22",
    ];
    values.forEach((value) => {
      prompt.mockImplementationOnce(() => value);
      const log = jest.spyOn(console, "log");
      isDateAddressEmail();
      expect(log).toHaveBeenCalledWith("Invalid data");
    });
  });
  test("Correct data", () => {
    const values = [
      ["30.11.2021", "date"],
      ["test@gmail.com", "email"],
      ["+8(123)123-22-22", "telephone"],
      ["+8(1234)23-22-22", "telephone"],
    ];
    values.forEach((value) => {
      prompt.mockImplementationOnce(() => value[0]);
      const log = jest.spyOn(console, "log");
      isDateAddressEmail();
      expect(log).toHaveBeenCalledWith(
        `${value[0]} is ${value[1]}`
      );
    });
  });
});

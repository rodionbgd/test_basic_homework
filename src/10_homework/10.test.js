import { isDateAddressEmail } from "./10";

describe("Regular expression", () => {
  let prompt;
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
    prompt = jest.spyOn(window, "prompt");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  let values = [
    "25.25.2021",
    "31.11.2021",
    "!!test@@gmail.com",
    "+8a123123-22",
  ];
  test.each(values)('%p throws "Invalid data"', (value) => {
    prompt.mockReturnValueOnce(value);
    isDateAddressEmail();
    expect(log).toHaveBeenCalledWith("Invalid data");
  });
  values = [
    ["30.11.2021", "date"],
    ["test@gmail.com", "email"],
    ["+8(123)123-22-22", "telephone"],
    ["+8(1234)23-22-22", "telephone"],
  ];
  test.each(values)("%p is %p", (val, res) => {
    prompt.mockReturnValueOnce(val);
    isDateAddressEmail();
    expect(log).toHaveBeenCalledWith(`${val} is ${res}`);
  });
});

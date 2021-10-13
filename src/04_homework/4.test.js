import { setAge, createAdmin } from "./4";

describe("Set user age", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Setting correct age", () => {
    const age = Math.floor(Math.random() * 100);
    jest.spyOn(window, "prompt").mockReturnValueOnce(`${age}`);
    expect(setAge()).toEqual({
      name: "John",
      age,
    });
  });
  const values = [
    [-5, "Input number > 0"],
    ["age", "Input number"],
  ];
  test.each(values)("Value %p throw %p", (value, err) => {
    try {
      jest.spyOn(window, "prompt").mockReturnValueOnce(value);
    } catch (e) {
      expect(setAge()).toThrow(err);
    }
  });
});

describe("Create admin", () => {
  test("make full copy", () => {
    const user = {
      name: "John",
      age: 25,
    };
    expect(createAdmin(user)).toEqual({
      name: "admin",
      age: user.age,
      role: "admin",
    });
  });
  test("user without name", () => {
    const user = {
      age: 25,
    };
    expect(createAdmin(user)).toBeNull();
  });
});

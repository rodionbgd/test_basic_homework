import { setAge, createAdmin } from "./4";

describe("Set user age", () => {
  test("Setting correct age", () => {
    const age = Math.floor(Math.random() * 100);
    jest.spyOn(window, "prompt").mockImplementationOnce(() => age);
    expect(setAge()).toEqual({
      name: "John",
      age,
    });
  });
  test("Input <= 0", () => {
    try {
      jest.spyOn(window, "prompt").mockImplementation(() => -5);
    } catch (e) {
      expect(setAge()).toThrow("Input number > 0");
    }
  });
  test("Input is NaN", () => {
    try {
      jest.spyOn(window, "prompt").mockImplementation(() => "age");
    } catch (e) {
      expect(setAge()).toThrow("Input number");
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

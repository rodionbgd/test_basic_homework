import { diff, isWord, pow } from "./6";

describe("Get diff between two numbers", () => {
  test("Diff between two numbers", () => {
    expect(diff(5, 7)).toBe(2);
    expect(diff(4, 4)).toBe(0);
  });
  test("Throw NaN error", () => {
    try {
      diff(1, "a");
    } catch (e) {
      expect(e.message).toBe("NaN arg");
    }
  });
});

describe("One word or more", () => {
  let words = ["f1rst second 345 ...", "one", "1234 ttt 222"];
  test.each(words)("%p contains one word", (string) => {
    expect(isWord(string)).toBeTruthy();
  });
  words = ["first second 345 ...", "one two", "1234 ttt 222 \n ttt"];
  test.each(words)("%p contains more than a word", (string) => {
    expect(isWord(string)).toBeFalsy();
  });
  test("Throw no words error", () => {
    try {
      isWord("123 d1");
    } catch (e) {
      expect(e.message).toBe("No words");
    }
  });
});

describe("Pow number", () => {
  let values = [
    [2, 2, 4],
    [1, 5, 1],
    [-1, 2, 1],
    [0, 2, 0],
  ];
  test.each(values)("%p to the power %p is %p", (val, powVal, res) => {
    expect(pow(val, powVal)).toBe(res);
  });
  values = [
    [2, "2"],
    [1, null],
  ];
  test.each(values)("%p to the power %p is null", (val, powVal) => {
    expect(pow(val, powVal)).toBeNull();
  });
});

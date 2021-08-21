export function diff(num1, num2) {
  if (Number.isNaN(num1) || Number.isNaN(num2)) throw new Error("NaN arg");
  return Math.abs(num1 - num2);
}

export function isWord(str) {
  const words = str.split(" ");
  let num = 0;
  words.forEach((val) => {
    const nonLetter = val.match(/([^a-zA-Z])/g);
    if (!nonLetter) num += 1;
  });
  if (!num) throw new Error("No words");
  return num === 1;
}

export function pow(num, power) {
  if (typeof num !== "number" || typeof power !== "number") {
    return null;
  }
  if (power === 0) return 1;
  return num * pow(num, power - 1);
}

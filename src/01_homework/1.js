export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return NaN;
  return a + b;
}

export function getTwoStringsLengths(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return null;
  return str1.length + str2.length;
}

export function sumDigitsFromInput() {
  const answer = prompt("Input 3-digit number", "");
  if (answer.length !== 3) {
    console.log("Invalid input");
  }
  const number = answer.split("").filter((val) => !Number.isNaN(+val));
  if (number.length !== 3) {
    console.log("Invalid input");
  } else {
    const value = number.reduce((a, b) => +a + +b, 0);
    console.log(value);
  }
}

export function sumArr(arr) {
  if (arr.length !== 10) throw new Error("length != 10");
  const sum = arr.reduce((a, b) => {
    if (Number.isNaN(b)) throw new Error(`Value ${b} is NaN`);
    return a + b;
  });
  console.log(sum);
}

export function doubleArr(arr) {
  const dArr = [];
  arr.map((val) => {
    if (Number.isNaN(val)) throw new Error(`Value ${val} is NaN`);
    return dArr.push(2 * val);
  });
  return dArr;
}

export function maxMinArr(arr) {
  if (!arr.length) throw new Error("Array is empty");
  if (Number.isNaN(arr[0])) {
    throw new Error(`Value ${arr[0]} is NaN`);
  }
  let max = arr[0];
  let min = max;
  arr.forEach((val) => {
    if (Number.isNaN(val)) throw new Error(`Value ${val} is NaN`);
    if (val > max) {
      max = val;
    }
    if (val < min) min = val;
  });
  console.log(`Max: ${max}; Min: ${min}`);
}

const sumArr = arr => {
  if (arr.length !== 10) throw new Error('length != 10');
  let sum;
  sum = arr.reduce((sum, b) => {
    if (isNaN(b)) throw new Error(`Value ${b} is NaN`);
    return sum + b;
  });
  console.log(sum);
};

const doubleArr = arr => {
  let doubleArr = [];
  arr.map(val => {
    if (isNaN(val)) throw new Error(`Value ${val} is NaN`);
    doubleArr.push(2 * val);
  });
  return doubleArr;
};

const maxMinArr = arr => {
  if (!arr.length) throw new Error('Array is empty');
  if (isNaN(arr[0])) {
    throw new Error(`Value ${arr[0]} is NaN`);
  }
  let max = arr[0];
  let min = max;
  arr.map(val => {
    if (isNaN(val)) throw new Error(`Value ${val} is NaN`);
    if (val > max) {
      max = val;
    }
    if (val < min) min = val;
  });
  console.log(`Max: ${max}; Min: ${min}`);
};

module.exports = { sumArr, doubleArr, maxMinArr };

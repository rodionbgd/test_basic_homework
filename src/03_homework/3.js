const getSumOfRange = (start, fin) => {
  let result = "Invalid args";
  if (typeof start === "number" && typeof fin === "number")
    result = ((start + fin) * (fin - start)) / 2;
  console.log(result);
};

const multiplicationTable = (n) => {
  if (typeof n !== "number") {
    console.log("Invalid arg");
    return;
  }
  for (let i = 1; i < 10; i += 1) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

const getAverageOfOdds = () => {
  let result = prompt("Input value > 0", "");
  if (Number.isNaN(+result)) {
    result = "Value is NaN";
  } else if (result < 1) {
    result = "Value >=1";
  } else {
    result = Math.ceil(+result / 2);
  }
  console.log(result);
};
module.exports = {
  getSumOfRange,
  multiplicationTable,
  getAverageOfOdds,
};

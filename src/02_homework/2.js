const getMax = (a, b) => {
  let result = "Invalid args";
  if (typeof a === "number" && typeof b === "number")
    result = a > b ? a : b;
  console.log(result);
};

const getMonth = () => {
  const val = prompt("Input value: 1-12", "");
  if (Number.isNaN(+val) || +val < 1 || +val > 12) {
    console.log("Invalid input");
    return;
  }
  const options = {
    month: "long",
  };
  const date = new Date(Date.UTC(2021, +val - 1, 1));
  const month = date.toLocaleString("en-US", options);
  console.log(month);
};

const isCircleInSquare = (circle, square) => {
  if (
    typeof circle !== "number" ||
    typeof square !== "number"
  )
    return null;
  return (4 * circle) / Math.PI <= square;
};

module.exports = { getMax, getMonth, isCircleInSquare };

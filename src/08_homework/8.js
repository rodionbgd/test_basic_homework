const getDay = () => {
  const dateStr = prompt("Enter date DD.MM.YYYY", "");
  const dateArr = dateStr.split(".").reverse();
  if (dateArr.length !== 3) {
    throw new Error("Arg != 3");
  }
  dateArr.forEach((value) => {
    if (Number.isNaN(+value) || +value <= 0) {
      throw new Error(`Invalid value: ${value}`);
    }
  });
  const date = new Date(dateArr);
  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  console.log(day);
};

const getMinutes = () => {
  const date = new Date();
  console.log(date.getHours() * 60 + date.getMinutes());
};

function checkValue(value) {
  if (Number.isNaN(+value) || +value <= 0) {
    throw new Error(`Invalid value: ${value}`);
  }
}

const isOlder = (person1, person2) => {
  if (
    typeof person1 === "undefined" ||
    typeof person2 === "undefined"
  )
    throw new Error("Args < 2");
  const date1 = person1.split(".").reverse();
  const date2 = person2.split(".").reverse();
  if (date1.length !== 3 || date2.length !== 3) {
    throw new Error("Arg != 3");
  }
  try {
    date1.forEach(checkValue);
  } catch (e) {
    throw e;
  }
  try {
    date2.forEach(checkValue);
  } catch (e) {
    throw e;
  }
  let date = new Date(date1);
  if (date.toString() === "Invalid Date") {
    throw new Error("Invalid Date");
  }
  date = new Date(date2);
  if (date.toString() === "Invalid Date") {
    throw new Error("Invalid Date");
  }
  return date1.join(".") < date2.join(".");
};

module.exports = { getDay, getMinutes, isOlder };

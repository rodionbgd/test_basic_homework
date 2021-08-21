const setAge = () => {
  const age = prompt("Input User age", "");
  if (Number.isNaN(+age)) {
    throw Error("Input number");
  } else if (+age <= 0) {
    throw Error("Input number > 0");
  }
  const user = {
    name: "John",
  };
  user.age = +age;
  return user;
};

const createAdmin = (user) => {
  if (!Object.prototype.hasOwnProperty.call(user, "name"))
    return null;
  const admin = { ...user };
  admin.name = "admin";
  admin.role = "admin";
  return admin;
};

module.exports = { setAge, createAdmin };

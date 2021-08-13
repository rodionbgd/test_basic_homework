const setAge = () => {
  const age = prompt('Input User age', '');
  if (isNaN(+age)) {
    throw Error('Input number');
  } else if (+age <= 0) {
    throw Error('Input number > 0');
  }
  const user = {
    name: 'John',
  };
  user['age'] = +age;
  return user;
};

const createAdmin = user => {
  if (!user.hasOwnProperty('name')) return null;
  const admin = Object.assign({}, user);
  admin['name'] = 'admin';
  admin['role'] = 'admin';
  return admin;
};

module.exports = { setAge, createAdmin };

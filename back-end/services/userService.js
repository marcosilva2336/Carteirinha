const User = require('../models/user');
const calculateValidity = require('../utils/calculateValidity');

const createUser = async (name, cpf) => {
  const validity = calculateValidity();
  const newUser = new User({ name, cpf, validity });
  await newUser.save();
  return newUser;
};

const getUserByCPF = async (cpf) => {
  const user = await User.findOne({ cpf });
  return user;
};

module.exports = {
  createUser,
  getUserByCPF,
};

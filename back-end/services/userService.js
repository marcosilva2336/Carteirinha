const User = require('../models/user');
const calculateValidity = require('../utils/calculateValidity');

const createUser = async (name, cpf) => {
  const validityDate = calculateValidity();
  const user = new User({ name, cpf, validity: validityDate });
  return await user.save();
};

const getUserByCPF = async (cpf) => {
  return await User.findOne({ cpf });
};

module.exports = {
  createUser,
  getUserByCPF,
};

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  validity: { type: Date, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

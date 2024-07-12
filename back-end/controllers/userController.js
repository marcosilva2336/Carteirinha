const userService = require('../services/userService');
const s3 = require('../config/s3');

exports.createUser = async (req, res) => {
  const { name, cpf } = req.body;

  try {
    const newUser = await userService.createUser(name, cpf);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUserByCPF = async (req, res) => {
  const { cpf } = req.params;

  try {
    const user = await userService.getUserByCPF(cpf);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.uploadPhoto = async (req, res) => {
  const { file } = req;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3.upload(params).promise();
    res.status(200).json({ message: 'File uploaded successfully', data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

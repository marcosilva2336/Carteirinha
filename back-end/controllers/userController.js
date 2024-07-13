const userService = require('../services/userService');
const uploadService = require('../services/uploadService');

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
  if (!req.file) {
    return res.status(400).send({ error: 'Nenhum arquivo enviado' });
  }

  try {
    const photoUrl = await uploadService.uploadFile(req.file.buffer, req.file.originalname, req.file.mimetype);
    const { name, cpf } = req.body; // Adicione o nome e o CPF no corpo da requisição ao enviar a foto

    // Cria o usuário com a URL da foto
    const newUser = await userService.createUser(name, cpf, photoUrl);

    res.status(200).send({ message: 'Upload realizado com sucesso', data: newUser });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao salvar o arquivo no S3', details: error.message });
  }
};

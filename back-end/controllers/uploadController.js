const uploadService = require('../services/uploadService');

const uploadFile = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);

  if (!req.file) {
    console.log('Nenhum arquivo enviado.');
    return res.status(400).send({ error: 'Nenhum arquivo enviado' });
  }

  try {
    const result = await uploadService.uploadFile(req.file.buffer, req.file.originalname, req.file.mimetype);
    console.log('Resultado do upload:', result);
    res.status(200).send({ message: 'Upload realizado com sucesso', data: result });
  } catch (error) {
    console.log('Erro ao salvar o arquivo no S3:', error);
    res.status(500).send({ error: 'Erro ao salvar o arquivo no S3', details: error.message });
  }
};

module.exports = {
  uploadFile,
};

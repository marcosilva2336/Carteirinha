const s3Service = require('./s3Service');

const uploadFile = async (buffer, filename, mimetype) => {
  try {
    // Envie o arquivo diretamente para o S3
    return await s3Service.uploadFile(buffer, filename, mimetype);
  } catch (error) {
    console.error('Erro ao enviar a imagem:', error);
    throw error;
  }
};

module.exports = {
  uploadFile,
};

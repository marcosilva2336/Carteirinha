const s3Service = require('./s3Service');

const uploadFile = async (buffer, filename, mimetype) => {
  try {
    const photoUrl = await s3Service.uploadFile(buffer, filename, mimetype);
    return photoUrl;
  } catch (error) {
    console.error('Erro ao fazer upload para o S3:', error);
    throw error;
  }
};

module.exports = {
  uploadFile,
};

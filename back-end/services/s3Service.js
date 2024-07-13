const { PutObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('../config/s3');

const uploadFile = async (buffer, filename, mimetype) => {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `${Date.now()}_${filename}`,
    Body: buffer,
    ContentType: mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);
    return data;
  } catch (err) {
    console.log('Erro ao fazer upload para o S3:', err);
    throw err;
  }
};

module.exports = {
  uploadFile,
};

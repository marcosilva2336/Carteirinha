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
    await s3Client.send(command);
    const url = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${params.Key}`;
    return url;
  } catch (err) {
    console.log('Erro ao fazer upload para o S3:', err);
    throw err;
  }
};

module.exports = {
  uploadFile,
};

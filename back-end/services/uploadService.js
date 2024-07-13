const s3Service = require('./s3Service');
const sharp = require('sharp');

const uploadFile = async (buffer, filename, mimetype) => {
  try {
    // Converte a imagem para JPG
    const convertedBuffer = await sharp(buffer)
      .jpeg({ quality: 80 })
      .toBuffer();

    const newFilename = filename.replace(/\.[^/.]+$/, "") + '.jpg';
    const newMimetype = 'image/jpeg';

    return await s3Service.uploadFile(convertedBuffer, newFilename, newMimetype);
  } catch (error) {
    console.error('Erro ao converter a imagem:', error);
    throw error;
  }
};

module.exports = {
  uploadFile,
};

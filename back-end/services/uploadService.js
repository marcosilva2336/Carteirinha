const s3Service = require('./s3Service');

const uploadFile = async (buffer, filename, mimetype) => {
  return await s3Service.uploadFile(buffer, filename, mimetype);
};

module.exports = {
  uploadFile,
};

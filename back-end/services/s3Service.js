const s3 = require('../config/s3');

const uploadFile = (fileContent, fileName, mimeType) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
    ContentType: mimeType,
  };

  return s3.upload(params).promise();
};

module.exports = {
  uploadFile,
};

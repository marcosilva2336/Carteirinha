const s3Service = require('../services/s3Service');

const uploadFile = async (req, res) => {
  try {
    const { buffer, originalname, mimetype } = req.file;
    const data = await s3Service.uploadFile(buffer, originalname, mimetype);
    res.status(200).json({ message: 'File uploaded successfully', data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  uploadFile,
};

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('file'); // O nome do campo é 'file'

module.exports = upload;

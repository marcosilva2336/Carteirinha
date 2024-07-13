const express = require('express');
const uploadController = require('../controllers/uploadController');
const upload = require('../utils/multerConfig');

const router = express.Router();

router.post('/', upload, uploadController.uploadFile);

module.exports = router;

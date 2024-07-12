const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

// Configurar multer para upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('photo'), uploadController.uploadFile);

module.exports = router;

const express = require('express');
const { createUser, getUserByCPF, uploadPhoto } = require('../controllers/userController');
const multer = require('multer');

const upload = multer();

const router = express.Router();

router.post('/', createUser);
router.get('/:cpf', getUserByCPF);
router.post('/upload', upload.single('file'), uploadPhoto);

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Erro ao conectar ao MongoDB: ${err}`);
});

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/upload', uploadRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

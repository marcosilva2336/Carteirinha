const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importe o pacote cors
const userRoutes = require('./routes/userRoutes');
const s3Client = require('./config/s3');
const { ListBucketsCommand } = require('@aws-sdk/client-s3');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());  // Use o middleware cors

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

const testS3Connection = async () => {
  try {
    const command = new ListBucketsCommand({});
    const data = await s3Client.send(command);
    console.log('Buckets disponíveis no S3:', data.Buckets);
  } catch (err) {
    console.log('Erro ao conectar ao S3:', err);
  }
};

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      testS3Connection(); // Testa a conexão com o S3 ao iniciar o servidor
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

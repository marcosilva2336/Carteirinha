# Carteirinha
O projeto "Carteirinha" é uma aplicação web desenvolvida para a criação, consulta e validação de cartões de acesso. A aplicação consiste em um backend construído com Node.js e Express, utilizando o MongoDB Atlas para armazenamento de dados, e um frontend desenvolvido com Next.js e Material-UI. Além disso, a aplicação utiliza o AWS S3 para armazenar fotos de usuários.



## Funcionalidades

- **Criação de Cartão**: Permite aos usuários criar cartões de acesso preenchendo informações como nome e CPF.
- **Consulta de Cartão**: Permite aos usuários consultar os detalhes do cartão de acesso utilizando o CPF.
- **Validação de Cartão**: Exibe a validade do cartão e informa se ele é válido ou não.
- **Upload de Foto**: Permite o upload de fotos para o AWS S3.


## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Mongoose (para conexão com o MongoDB)
- AWS SDK (para integração com o S3)
- Multer (para upload de arquivos)
- dotenv (para gerenciamento de variáveis de ambiente)

### Frontend
- React.js
- Next.js
- Material-UI
- AOS
- Styled-components
- Axios (para requisições HTTP)


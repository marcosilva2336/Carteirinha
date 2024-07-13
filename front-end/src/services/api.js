import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // ajuste se necessário

export const createUser = async (name, cpf) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, { name, cpf });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Erro ao criar usuário');
  }
};

export const uploadPhoto = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_BASE_URL}/users/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Erro ao fazer upload da foto');
  }
};

import axios from 'axios';

const API_BASE_URL = 'https://carteirinha-back-psi.vercel.app/api';

export const createUser = async (name, cpf) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, { name, cpf });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Erro ao criar usuário');
  }
};

export const getUserByCPF = async (cpf) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${cpf}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Erro ao buscar usuário');
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

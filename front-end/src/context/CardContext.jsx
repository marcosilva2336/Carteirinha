import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [cpf, setCpf] = useState(''); // Adicione este estado
  const [expiryDate, setExpiryDate] = useState(null);

  return (
    <CardContext.Provider value={{ name, setName, photo, setPhoto, cpf, setCpf, expiryDate, setExpiryDate }}>
      {children}
    </CardContext.Provider>
  );
};

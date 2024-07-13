import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [photo, setPhoto] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);

  return (
    <CardContext.Provider value={{ name, setName, cpf, setCpf, photo, setPhoto, expiryDate, setExpiryDate }}>
      {children}
    </CardContext.Provider>
  );
};

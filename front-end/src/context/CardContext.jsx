import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());

  return (
    <CardContext.Provider value={{ name, setName, photo, setPhoto, expiryDate, setExpiryDate }}>
      {children}
    </CardContext.Provider>
  );
};

import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { TextField } from '@mui/material';

const NameInput = () => {
  const { name, setName } = useContext(CardContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <TextField
      label="Nome"
      variant="outlined"
      value={name}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
  );
};

export default NameInput;

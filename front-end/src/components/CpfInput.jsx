import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { CardContext } from '../context/CardContext';

const CpfInput = () => {
  const { cpf, setCpf } = useContext(CardContext);

  return (
    <TextField
      label="CPF"
      variant="outlined"
      fullWidth
      value={cpf}
      onChange={(e) => setCpf(e.target.value)}
    />
  );
};

export default CpfInput;

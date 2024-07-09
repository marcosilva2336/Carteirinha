import React, { useContext, useState } from 'react';
import { CardContext } from '../context/CardContext';
import { Button, Box, Typography } from '@mui/material';

const UploadButton = () => {
  const { setPhoto } = useContext(CardContext);
  const [fileName, setFileName] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Button variant="contained" component="label" color="primary">
        UPLOAD FOTO
        <input type="file" hidden onChange={handleUpload} />
      </Button>
      
    </Box>
  );
};

export default UploadButton;

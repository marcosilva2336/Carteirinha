import React from 'react';
import { CardProvider } from '../context/CardContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CardProvider>
      <Component {...pageProps} />
    </CardProvider>
  );
};

export default MyApp;

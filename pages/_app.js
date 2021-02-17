import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from '../styles/theme';

// uncomment when you want to convert to tailwind
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ChakraProvider>
  );
}

export default MyApp;

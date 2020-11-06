import { ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider value="dark">
                <GlobalStyles>
                    <Component {...pageProps} />
                </GlobalStyles>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default MyApp;

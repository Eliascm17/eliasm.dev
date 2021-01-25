import { ColorModeProvider, ThemeProvider } from '@chakra-ui/react';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider
                value="dark"
                options={{
                    useSystsemColorMode: true
                }}
            >
                <GlobalStyles>
                    <Component {...pageProps} />
                </GlobalStyles>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default MyApp;

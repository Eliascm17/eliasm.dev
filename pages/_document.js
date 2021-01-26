import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import GoogleFonts from 'next-google-fonts';
import theme from '@/styles/theme';
import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
                <Head />
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

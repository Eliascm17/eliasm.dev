import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700
    },
    breakpoints: ['30em', '48em', '62em', '80em'],
    initialColorMode: 'dark',
    useSystemColorMode: false
});

export default theme;

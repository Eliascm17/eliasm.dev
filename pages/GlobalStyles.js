import { CSSReset, useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import React from 'react';
import { prismDarkTheme, prismLightTheme } from '../styles/prism';

export const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      {/* <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      /> */}
      {children}
    </>
  );
};

export default GlobalStyle;

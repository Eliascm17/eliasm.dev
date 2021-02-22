import React, { useState, useEffect } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import palenight from 'prism-react-renderer/themes/palenight';

const CodeBlock = ({ children, className }) => {
  const [mounted, setMounted] = useState(false);
  const { colorMode } = useColorMode();

  const language = className.replace(/language-/, '');

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const code = {
    dark: nightOwl,
    light: palenight
  };

  return (
    <Box
      my={4}
      maxWidth={['350px', '460px', '600px', '700px']}
      justify="center"
    >
      <Highlight
        {...defaultProps}
        theme={code[colorMode]}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{ ...style, padding: '20px', overflow: 'scroll' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;

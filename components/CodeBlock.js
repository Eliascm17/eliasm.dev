import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box, Flex } from '@chakra-ui/react';
import dracula from 'prism-react-renderer/themes/nightOwl';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Box my={4} maxWidth="700px">
      <Highlight
        {...defaultProps}
        theme={dracula}
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

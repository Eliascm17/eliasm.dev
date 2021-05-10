import React, { useState, useEffect } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import palenight from 'prism-react-renderer/themes/palenight';
import { useTheme } from 'next-themes';

const CodeBlock = ({ children, className }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const language = className.replace(/language-/, '');

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const code = {
    dark: nightOwl,
    light: palenight
  };

  return (
    <div className="my-5 justify-center text-sm sm:text-md">
      {mounted && (
        <Highlight
          {...defaultProps}
          theme={code[theme]}
          code={children}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className="overflow-x-auto p-6" style={{ ...style }}>
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
      )}
    </div>
  );
};

export default CodeBlock;

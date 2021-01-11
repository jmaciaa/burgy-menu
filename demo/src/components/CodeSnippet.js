import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from '../codeTheme';

const CodeSnippet = ({ code }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code.trim()} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeSnippet;

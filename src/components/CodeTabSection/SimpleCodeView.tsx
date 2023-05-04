import React, { memo } from 'react';
import { LANGUAGE } from 'constants/code-block';
import Box from '@mui/material/Box';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import CodeBlock from 'components/CodeBlock';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

type Props = {
  code?: string;
  language: LANGUAGE;
  showLineNumber: boolean;
};

const SimpleCodeView = ({ code, language, showLineNumber }: Props) => {
  return (
    <Box className={'relative min-h-[500px] max-h-[500px] overflow-y-auto'}>
      <CodeBlock
          code={code || ''}
          language={language}
          showLineNumbers={showLineNumber}
          style={{
            minHeight: '480px'
          }}
      />
    </Box>
  );
};

SimpleCodeView.defaultProps = {};

export default memo(SimpleCodeView);

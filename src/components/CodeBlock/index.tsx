import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  code: string;
  language: string;
  showLineNumbers?: boolean
};

const CodeBlock: FC<Props> = ({ code, language, showLineNumbers }: Props) => {
  return (
    <SyntaxHighlighter
        style={tomorrow}
        language={language}
        showLineNumbers={showLineNumbers}
        customStyle={{
          minHeight: 500
        }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

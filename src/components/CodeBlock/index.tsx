import { CSSProperties, FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  code: string;
  language: string;
  showLineNumbers?: boolean,
  style?: CSSProperties
};

const CodeBlock: FC<Props> = ({ code, language, showLineNumbers, style }: Props) => {
  return (
    <SyntaxHighlighter
        style={tomorrow}
        language={language}
        showLineNumbers={showLineNumbers}
        customStyle={style}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import rangeParser from 'parse-numeric-range';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { css } from '@emotion/react';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

type MarkdownProps = {
  markdown: string & { content?: string };
};

const Markdown: FC<MarkdownProps> = ({ markdown }) => {
  const syntaxTheme = tomorrow;

  const styleMarkdown = css({
    '.codeStyle, pre, code, code span': {
      // Your SyntaxHighlighter override styles here
    },
    code: {
      // Your general code styles here
    },
    'pre code': {
      // Your code-block styles here
    },
    'h3 code': {
      color: 'inherit',
    },
    'span.linenumber': {
      display: 'none !important',
    },
    '[data="highlight"]': {
      // Your custom line highlight styles here
    },
  });

  const MarkdownComponents: object = {
    // @ts-ignore
    code({ node, inline, className, ...props }) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          // @ts-ignore
          const strLineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
          const highlightLines = rangeParser(strLineNumbers);
          const data: string | null = highlightLines.includes(applyHighlights) ? 'highlight' : null;
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag='div'
          className='codeStyle'
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    // @ts-ignore
    <ReactMarkdown components={MarkdownComponents} css={styleMarkdown}>
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;

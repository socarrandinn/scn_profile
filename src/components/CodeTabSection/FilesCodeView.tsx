import React, { memo, useEffect, useMemo } from 'react';
import CodeBlock from 'components/CodeBlock';
import { LANGUAGE } from 'constants/code-block';
import { FlexBox } from '@dfl/mui-react-common';
import FilesTreeView from './FilesTreeView';
import { useSelectedCodeFile } from 'contexts/SelectedCodeFileProvider';
import Box from '@mui/material/Box';

export type FileCodeProps = {
  path: string;
  code: string;
};

type Props = {
  code?: FileCodeProps[];
  language: LANGUAGE;
  showLineNumber: boolean;
};

const FilesCodeView = ({ code, language, showLineNumber }: Props) => {
  const { path, setPath } = useSelectedCodeFile();

  useEffect(() => {
    setPath(code?.[0]?.path);
  }, [code]);

  const selectedCode = useMemo(
    () => code?.find((c) => c.path === path)?.code || '',
    [code, path],
  );

  return (
    <FlexBox width={'100%'} gap={1} className={'relative min-h-[500px] max-h-[500px]'}>
      <FilesTreeView code={code} />
      <Box className={'flex-1 relative min-h-full max-h-full overflow-y-auto'}>
        <CodeBlock
          code={selectedCode}
          language={language}
          showLineNumbers={showLineNumber}
          style={{
            minHeight: '480px'
          }}
        />
      </Box>
    </FlexBox>
  );
};

FilesCodeView.defaultProps = {};

export default memo(FilesCodeView);

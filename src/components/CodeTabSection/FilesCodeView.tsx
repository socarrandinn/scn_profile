import React, { memo, useMemo } from 'react';
import { CopyBlock, tomorrowNight } from 'react-code-blocks';
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
  const { path } = useSelectedCodeFile();

  const selectedCode = useMemo(() => code?.find((c) => c.path === path)?.code || '', [code]);

  console.log('selectedCode', path, selectedCode);

  return (
    <FlexBox width={'100%'} gap={1}>
      <FilesTreeView code={code} />
      <Box className={'flex-1 relative'}>
        <CopyBlock
          key={`${language}-${path || ''}`}
          text={selectedCode}
          language={language}
          showLineNumbers={showLineNumber}
          theme={tomorrowNight}
          customStyle={{
            height: '100%',
          }}
        />
      </Box>
    </FlexBox>
  );
};

FilesCodeView.defaultProps = {};

export default memo(FilesCodeView);

import React, { memo } from 'react';
import { CopyBlock, tomorrowNight } from 'react-code-blocks';
import { LANGUAGE } from 'constants/code-block';
import Box from '@mui/material/Box';

type Props = {
  code?: string;
  language: LANGUAGE;
  showLineNumber: boolean;
};

const SimpleCodeView = ({ code, language, showLineNumber }: Props) => {
  return (
    <Box className={'relative min-h-[500px] max-h-[500px] overflow-y-auto'}>
      <CopyBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumber}
          theme={tomorrowNight}
          customStyle={{
            minHeight: '100%',
          }}
      />
    </Box>
  );
};

SimpleCodeView.defaultProps = {};

export default memo(SimpleCodeView);

import React, { memo, SyntheticEvent } from 'react';
import { Box, Tab } from '@mui/material';
import { CodeProps } from 'hocs/withCodeSample';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { getLanguageName } from 'utils/index';
import { LANGUAGE } from 'constants/code-block';
import SimpleCodeView from './SimpleCodeView';
import FilesCodeView from './FilesCodeView';
import { SelectedCodeFileProvider } from 'contexts/SelectedCodeFileProvider';

type Props = {
  code?: CodeProps[];
  language: LANGUAGE;
  handleChangeLanguage: (event: SyntheticEvent, newValue: LANGUAGE) => void;
  showLineNumber: boolean;
};

const CodeTabSection = ({ code, language, handleChangeLanguage, showLineNumber }: Props) => {
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={language}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeLanguage} centered>
            {code?.map((el: CodeProps) => (
              <Tab key={el?.language} label={getLanguageName(el?.language)} value={el?.language} />
            ))}
          </TabList>
        </Box>
        {code?.map((el: CodeProps) => (
          <TabPanel
            key={el?.language}
            value={el?.language}
            sx={{
              padding: '10px 0',
            }}
          >
            {typeof el?.code === 'string'
              ? (
              <SimpleCodeView code={el?.code} language={el?.language} showLineNumber={showLineNumber} />
                )
              : (
              <SelectedCodeFileProvider>
                <FilesCodeView code={el?.code} language={el?.language} showLineNumber={showLineNumber} />
              </SelectedCodeFileProvider>
                )}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default memo(CodeTabSection);

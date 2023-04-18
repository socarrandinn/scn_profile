import React, { ComponentType, useState, SyntheticEvent, useCallback, useMemo } from 'react';
import { LANGUAGE } from 'constants/code-block';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import { FormControlLabel, IconButton, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { CopyBlock, dracula } from 'react-code-blocks';
import { SampleCodeContainer } from 'modules/docs/buttons/components/styled';
import { getLanguageName } from 'utils/index';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

export type WithCodeSampleProps = {
  className?: string;
  codeTitle?: string;
  codeDescription?: string;
  code?: CodeProps[];
  defaultLanguage?: LANGUAGE;
};

export type CodeProps = {
  language: LANGUAGE;
  code: string;
};

export function withCodeSample<T> (WrappedComponent: ComponentType<T & WithCodeSampleProps>) {
  const ComponentWithCodeSample = (props: T & WithCodeSampleProps & ChildrenProps) => {
    const { t } = useTranslation('common');
    const { children, codeTitle, codeDescription, defaultLanguage, code, ...rest } = props || {};

    const [showCode, setShowCode] = useState(false);
    const [language, setLanguage] = useState(defaultLanguage || LANGUAGE.TSX);
    const [showLineNumber, setShowLineNumber] = useState(true);

    const hasSampleCode = useMemo(() => {
      const count = code?.filter((el: CodeProps) => el?.code?.length > 0)?.length || 0;
      return count > 0;
    }, [code]);

    const handleChangeLanguage = useCallback((event: SyntheticEvent, newValue: LANGUAGE) => {
      setLanguage(newValue);
    }, []);

    return (
      <Box>
        {(codeTitle || codeDescription) && (
          <Box>
            {codeTitle && <div>{codeTitle}</div>}
            {codeDescription && <div dangerouslySetInnerHTML={{ __html: codeDescription }} />}
          </Box>
        )}
        <SampleCodeContainer>
          {/* @ts-ignore */}
          <WrappedComponent {...rest}>{children}</WrappedComponent>
        </SampleCodeContainer>
        {hasSampleCode && (
          <>
            <Box>
              <FlexBox width={'100%'} justifyContent={showCode ? 'space-between' : 'end'} alignItems={'center'} py={1}>
                {showCode && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color='secondary'
                        onChange={(evt) => {
                          setShowLineNumber(evt?.target?.checked);
                        }}
                      />
                    }
                    label={t('showLineNumber')}
                  />
                )}
                <IconButton
                  disableRipple={true}
                  disableFocusRipple={true}
                  onClick={() => {
                    setShowCode((prev) => !prev);
                  }}
                >
                  <CodeIcon sx={{ color: '#707070' }} />
                </IconButton>
              </FlexBox>
            </Box>
            {showCode && (
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
                      <CopyBlock
                        text={el?.code}
                        language={el?.language}
                        showLineNumbers={showLineNumber}
                        theme={dracula}
                      />
                    </TabPanel>
                  ))}
                </TabContext>
              </Box>
            )}
          </>
        )}
      </Box>
    );
  };
  return ComponentWithCodeSample;
}

export default withCodeSample;

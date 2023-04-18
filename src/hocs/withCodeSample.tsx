import React, { ComponentType, useState, SyntheticEvent, useCallback, useMemo } from 'react';
import { LANGUAGE } from 'constants/code-block';
import { ChildrenProps } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { CopyBlock } from 'react-code-blocks';

type WithCodeSampleProps = {
  className?: string;
  codeTitle?: string;
  codeDescription?: string;
  code?: CodeProps[];
  defaultLanguage?: LANGUAGE;
};

type CodeProps = {
  language: LANGUAGE;
  code: string;
};

export function withCodeSample<T> (WrappedComponent: ComponentType<T & WithCodeSampleProps>) {
  const ComponentWithCodeSample = (props: T & WithCodeSampleProps & ChildrenProps) => {
    const { children, codeTitle, codeDescription, defaultLanguage, code, ...rest } = props || {};

    const [showCode, setShowCode] = useState(false);
    const [language, setLanguage] = useState(defaultLanguage || LANGUAGE.TYPESCRIPT);
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
        {/* @ts-ignore */}
        <WrappedComponent {...rest}>{children}</WrappedComponent>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              disableRipple={true}
              disableFocusRipple={true}
              onClick={() => {
                setShowCode((prev) => !prev);
              }}
            >
              <CodeIcon sx={{ color: '#707070' }} />
            </IconButton>
          </Box>
        </Box>
        {hasSampleCode && showCode && (
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={language}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChangeLanguage}>
                  {code?.map((el: CodeProps) => (
                    <Tab key={el?.language} label={el?.language} value={el?.language} />
                  ))}
                </TabList>
              </Box>
              {code?.map((el: CodeProps) => (
                <TabPanel key={el?.language} value={el?.language}>
                  <CopyBlock text={el.code} language={el?.language} showLineNumbers={showLineNumber} />
                </TabPanel>
              ))}
            </TabContext>
          </Box>
        )}
      </Box>
    );
  };
  return ComponentWithCodeSample;
}

export default withCodeSample;

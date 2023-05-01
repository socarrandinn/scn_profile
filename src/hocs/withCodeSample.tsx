import React, { ComponentType, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { LANGUAGE } from 'constants/code-block';
import { CheckBoxField, ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledDemoContainer } from 'components/styled';
import CodeTabSection from 'components/CodeTabSection';
import { FileCodeProps } from 'components/CodeTabSection/FilesCodeView';

export type WithCodeSampleProps = {
  className?: string;
  code?: CodeProps[];
  defaultLanguage?: LANGUAGE;
  defaultCodeVisible?: boolean;
};

export type CodeProps = {
  language: LANGUAGE;
  code: string | FileCodeProps[];
};

export function withCodeSample<T> (WrappedComponent: ComponentType<T & WithCodeSampleProps>) {
  // eslint-disable-next-line react/display-name
  return (props: T & WithCodeSampleProps & ChildrenProps) => {
    const finalProps: T & WithCodeSampleProps & ChildrenProps = {
      ...(WrappedComponent.defaultProps || {}),
      ...(props || {}),
    };
    const { t } = useTranslation('common');
    const { children, defaultLanguage, code, defaultCodeVisible, ...rest } = finalProps;
    const [showCode, setShowCode] = useState(defaultCodeVisible);
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
        <StyledDemoContainer mt={2}>
          {/* @ts-ignore */}
          <WrappedComponent {...rest}>{children}</WrappedComponent>
        </StyledDemoContainer>
        {hasSampleCode && (
          <>
            <Box>
              <FlexBox width={'100%'} justifyContent={showCode ? 'space-between' : 'end'} alignItems={'center'} py={1}>
                {showCode && (
                  <CheckBoxField
                    checked={showLineNumber}
                    onChange={(evt) => {
                      setShowLineNumber(evt?.target?.checked);
                    }}
                    label={t('showLineNumber')}
                  />
                )}
                <Tooltip title={t('viewCode')}>
                  <IconButton
                    onClick={() => {
                      setShowCode((prev) => !prev);
                    }}
                  >
                    <CodeIcon sx={{ color: '#707070' }} />
                  </IconButton>
                </Tooltip>
              </FlexBox>
            </Box>
            {showCode && <CodeTabSection code={code} language={language} handleChangeLanguage={handleChangeLanguage} showLineNumber={showLineNumber}/>}
          </>
        )}
      </Box>
    );
  };
}

export default withCodeSample;

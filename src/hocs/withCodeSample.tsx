import React, { ComponentType, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { LANGUAGE } from 'constants/code-block';
import { CheckBoxField, ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledDemoContainer } from 'components/styled';
import CodeTabSection from 'components/CodeTabSection';
import { FileCodeProps } from 'components/CodeTabSection/FilesCodeView';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';
import { useQuery } from '@tanstack/react-query';
import MarkDown from 'components/MarkDown';

export type WithCodeSampleProps = {
  className?: string;
  code?: CodeProps[];
  docPath?: string;
  defaultLanguage?: LANGUAGE;
  defaultVisibleOption?: NORMAL_SAMPLE_OPTIONS_ENUM;
};

export type CodeProps = {
  language: LANGUAGE;
  code: string | FileCodeProps[];
};

const iconStyle = { color: '#707070' };

export function withCodeSample<T>(WrappedComponent: ComponentType<T & WithCodeSampleProps>) {
  // eslint-disable-next-line react/display-name
  return (props: T & WithCodeSampleProps & ChildrenProps) => {
    const finalProps: T & WithCodeSampleProps & ChildrenProps = {
      ...(WrappedComponent.defaultProps || {}),
      ...(props || {}),
    };
    const { t } = useTranslation('common');
    const { children, defaultLanguage, code, docPath, defaultVisibleOption, ...rest } = finalProps;
    const [visibleOption, setVisibleOption] = useState(defaultVisibleOption);
    const [language, setLanguage] = useState(defaultLanguage || LANGUAGE.TSX);
    const [showLineNumber, setShowLineNumber] = useState(true);

    const getFn = useCallback(() => {
      if (docPath) {
        return fetch(docPath).then((response) => response.text());
      }
    }, [docPath]);

    const { data: docText } = useQuery([docPath], getFn, {
      enabled: !!docPath,
    });

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
              <FlexBox
                width={'100%'}
                justifyContent={visibleOption === NORMAL_SAMPLE_OPTIONS_ENUM.CODE ? 'space-between' : 'end'}
                alignItems={'center'}
                py={1}
              >
                {visibleOption === NORMAL_SAMPLE_OPTIONS_ENUM.CODE && (
                  <CheckBoxField
                    checked={showLineNumber}
                    onChange={(evt) => {
                      setShowLineNumber(evt?.target?.checked);
                    }}
                    label={t('showLineNumber')}
                  />
                )}
                <FlexBox>
                  {docPath && (
                    <Tooltip title={t('viewDoc')}>
                      <IconButton
                        onClick={() => {
                          setVisibleOption(NORMAL_SAMPLE_OPTIONS_ENUM.DOC);
                        }}
                      >
                        <DescriptionIcon sx={iconStyle} />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Tooltip title={t('viewCode')}>
                    <IconButton
                      onClick={() => {
                        setVisibleOption(NORMAL_SAMPLE_OPTIONS_ENUM.CODE);
                      }}
                    >
                      <CodeIcon sx={iconStyle} />
                    </IconButton>
                  </Tooltip>
                </FlexBox>
              </FlexBox>
            </Box>
            {visibleOption === NORMAL_SAMPLE_OPTIONS_ENUM.CODE && (
              <CodeTabSection
                code={code}
                language={language}
                handleChangeLanguage={handleChangeLanguage}
                showLineNumber={showLineNumber}
              />
            )}
            {visibleOption === NORMAL_SAMPLE_OPTIONS_ENUM.DOC && docText && (
              <Box className={'relative min-h-[550px] max-h-[550px] flex-1 overflow-y-auto bg-white p-8'}>
                <MarkDown markdown={docText} />
              </Box>
            )}
          </>
        )}
      </Box>
    );
  };
}

export default withCodeSample;

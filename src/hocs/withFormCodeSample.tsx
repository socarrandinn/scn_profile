import React, { ComponentType, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { LANGUAGE } from 'constants/code-block';
import { CheckBoxField, ChildrenProps, FlexBox, H2 } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledDemoContainer } from 'components/styled';
import CodeTabSection from 'components/CodeTabSection';
import { FileCodeProps } from 'components/CodeTabSection/FilesCodeView';
import { SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';
import ReactJson from 'react-json-view';
import { useFormValue } from 'modules/demos/forms/context/FormValueProvider';

export type WithFormCodeSampleProps = {
  className?: string;
  code?: CodeProps[];
  defaultLanguage?: LANGUAGE;
  defaultVisibleOption?: SAMPLE_OPTIONS_ENUM;
};

export type CodeProps = {
  language: LANGUAGE;
  code: string | FileCodeProps[];
};

export function withFormCodeSample<T> (WrappedComponent: ComponentType<T & WithFormCodeSampleProps>) {
  // eslint-disable-next-line react/display-name
  return (props: T & WithFormCodeSampleProps & ChildrenProps) => {
    const { t } = useTranslation('common');

    const finalProps: T & WithFormCodeSampleProps & ChildrenProps = {
      ...(WrappedComponent.defaultProps || {}),
      ...(props || {}),
    };

    const { children, defaultLanguage, code, defaultVisibleOption, ...rest } = finalProps;

    const { formData, isErrorData } = useFormValue();

    const [visibleOption, setVisibleOption] = useState(defaultVisibleOption);
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
        <>
          <Box>
            <FlexBox
              width={'100%'}
              justifyContent={visibleOption === SAMPLE_OPTIONS_ENUM.CODE ? 'space-between' : 'end'}
              alignItems={'center'}
              py={1}
            >
              {visibleOption === SAMPLE_OPTIONS_ENUM.CODE && (
                <CheckBoxField
                  checked={showLineNumber}
                  onChange={(evt) => {
                    setShowLineNumber(evt?.target?.checked);
                  }}
                  label={t('showLineNumber')}
                />
              )}
              <FlexBox gap={1}>
                <Tooltip title={t('viewFormData')}>
                  <IconButton
                    onClick={() => {
                      setVisibleOption((prev) => {
                        if (prev === SAMPLE_OPTIONS_ENUM.FORM_DATA) {
                          return undefined;
                        }
                        return SAMPLE_OPTIONS_ENUM.FORM_DATA;
                      });
                    }}
                  >
                    <DataObjectIcon sx={{ color: '#707070' }} />
                  </IconButton>
                </Tooltip>
                {hasSampleCode && (
                  <Tooltip title={t('viewCode')}>
                    <IconButton
                      onClick={() => {
                        setVisibleOption((prev) => {
                          if (prev === SAMPLE_OPTIONS_ENUM.CODE) {
                            return undefined;
                          }
                          return SAMPLE_OPTIONS_ENUM.CODE;
                        });
                      }}
                    >
                      <CodeIcon sx={{ color: '#707070' }} />
                    </IconButton>
                  </Tooltip>
                )}
              </FlexBox>
            </FlexBox>
          </Box>
          {visibleOption === SAMPLE_OPTIONS_ENUM.CODE && (
            <CodeTabSection
              code={code}
              language={language}
              handleChangeLanguage={handleChangeLanguage}
              showLineNumber={showLineNumber}
            />
          )}
        </>
        {formData && visibleOption === SAMPLE_OPTIONS_ENUM.FORM_DATA && (
          <FlexBox className={'relative min-h-[550px] max-h-[550px]'} gap={2} flexDirection={'column'}>
            <H2>{isErrorData ? 'Form Errors' : 'Form Values'}</H2>
            <Box className={'relative flex-1 overflow-y-auto'}>
              <ReactJson
                  style={{
                    minHeight: 500,
                  }}
                  name={false}
                  theme={'tomorrow'}
                  src={formData || {}}
                  displayDataTypes={false}
                  displayObjectSize={false}
                  enableClipboard={false}
              />
            </Box>
          </FlexBox>
        )}
      </Box>
    );
  };
}

export default withFormCodeSample;

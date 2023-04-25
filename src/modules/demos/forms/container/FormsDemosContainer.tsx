import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LoginFormDemo from '../components/LoginFormDemo';
import { loginFormSampleCode } from '../components/LoginFormDemo/code';
import ValidationFormDemo from '../components/ValidationFormDemo';
import { validationFormSampleCode } from '../components/ValidationFormDemo/code';

const FormsDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <LoginFormDemo
          codeTitle={t('forms.loginSample.title')}
          codeDescription={t('forms.loginSample.description')}
          code={loginFormSampleCode}
          />
        <ValidationFormDemo
            codeTitle={t('forms.validationSample.title')}
            codeDescription={t('forms.validationSample.description')}
            code={validationFormSampleCode}
        />
    </Box>
  );
};

export default memo(FormsDemosContainer);

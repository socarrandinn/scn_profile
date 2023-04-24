import { memo } from 'react';
import { Box } from '@mui/material';
import LoginFormDemo from '../components/LoginFormDemo';
import { loginFormSampleCode } from 'modules/demos/forms/components/LoginFormDemo/code';
import { useTranslation } from 'react-i18next';

const FormsDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <LoginFormDemo
          codeTitle={t('forms.loginSample.title')}
          codeDescription={t('forms.loginSample.description')}
          code={loginFormSampleCode}
          />
    </Box>
  );
};

export default memo(FormsDemosContainer);

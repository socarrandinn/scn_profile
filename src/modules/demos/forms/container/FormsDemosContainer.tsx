import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LoginFormDemo from '../components/LoginFormDemo';
import ValidationFormDemo from '../components/ValidationFormDemo';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';

const FormsDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
        <FormDemoSectionPanel
            title={t('forms.loginSample.title')}
            description={t('forms.loginSample.description')}
        >
            <LoginFormDemo />
        </FormDemoSectionPanel>
        <FormDemoSectionPanel
            title={t('forms.validationSample.title')}
            description={t('forms.validationSample.description')}
        >
            <ValidationFormDemo />
        </FormDemoSectionPanel>
    </Box>
  );
};

export default memo(FormsDemosContainer);

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import LoginFormDemo from '../components/LoginFormDemo';

const DemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
        <FormDemoSectionPanel
            title={t('forms.loginSample.title')}
            description={t('forms.loginSample.description')}
        >
            <LoginFormDemo />
        </FormDemoSectionPanel>
    </Box>
  );
};

export default memo(DemoContainer);
